const Hapi = require('@hapi/hapi');
const { Sequelize, Model, DataTypes } = require('sequelize');
const { CREATED } = require('http-status');

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

    class Post extends Model {}

    Post.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, { sequelize, modelName: 'post'} );
    
    server.route({
        method: 'GET',
        path: '/',
        handler: async (request, h) => {
            return 'Hello hapi';
        }
    });

    server.route({
        method: 'POST',
        path: '/posts',
        handler: async (request, h) => {
            const { payload } = request;

            const post = await Post.create(payload);
            return h.response(post).code(CREATED);
        }
    });

    server.route({
        method: 'GET',
        path: '/posts',
        handler: async (request, h) => {
            return await Post.findAll();
        }
    });
    
    server.route({
        method: 'GET',
        path: '/posts/{id}',
        handler: async (request, h) => {
            const { id } = request.params;
            return await Post.findByPk(id);
        }
    });

    // Inserir o sync de tabelas antes do server.start()
    // ...

    try {
        await sequelize.sync();
        Post.bulkCreate(data);
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