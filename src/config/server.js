console.log('src/server.js');

import Hapi from '@hapi/hapi';
import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('informatica', 'informatica', 'informatica', {
    dialect: 'mysql',
    port: 3307
});

const data = [
    {
        title: 'Novo Post',
        content: 'Olá amigos, nosso primeiro post'
    },
    {
        title: 'Outro post',
        content: 'Olá amigos, estamos à todo vapor produzindo conteúdo por aqui :)'
    }
]

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register([
        {
            plugin: require('hapi-sequelizejs'),
            options: [
                {
                    name: 'informatica',
                    models: [
                        'src/api/**/**.models.js'
                    ],
                    sequelize,
                    sync: true
                }
            ]
        },
        {
            plugin: require('hapi-router'),
            options: {
                routes: 'src/api/**/**.routes.js'
            }
        }
    ]);

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: async (request, h) => {
    //         return 'Hello hapi';
    //     }
    // });

    // Inserir o sync de tabelas antes do server.start()
    // ...

    try {
        await sequelize.sync();
        //Post.bulkCreate(data);
    } catch (error) {
        throw new Error(error);
    }

    await sequelize.sync();
    await server.start();

    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();