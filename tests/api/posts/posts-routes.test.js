import Lab from '@hapi/lab';
import { expect } from '@hapi/code';
import { init } from '../../../src/config/server.config';
import { OK } from 'http-status';

const { beforeEach, afterEachm, describe, it } = exports.lab = Lab.script();

describe('GET /posts', () => {
    let server;
    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnVub2JyYW5jYWxoYW8yNkBnbWFpbC5jb20iLCJpYXQiOjE1NzU3NDQ3NjMsImV4cCI6MTU3NTgzMTE2M30.XYBTtX_hvUgBuZWlNmekIZxietwdAbkJJq6YwQcus9E';
    beforeEach(async () => {
      server = await init();
    });

    afterEach(async () => {
      await server.stop();
    });

    it('[/posts] should returns 200', async () => {
         const options = {
             method: 'GET',
             url: '/post',
             headers: { authorization }
         };
         const res = await server.inject(options);

         expect(res.statusCode).to.equal(OK);
    });
});