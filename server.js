const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const fs = require('fs');
const port = 8443;

const server = new Hapi.Server();

server.connection({
  port: port,
  tls: {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }
});

server.register(Inert, (err) => {
  if(err) throw err;
  server.route([{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const path = Path.join(__dirname, './index.html');
      reply.file(path);
    }
  },
  {
      method: 'GET',
      path: '/script.js',
      handler: (request, reply) => {
        const path = Path.join(__dirname, './script.js');
        reply.file(path);
      }
  },
  {
      method: 'GET',
      path: '/style.css',
      handler: (request, reply) => {
        const path = Path.join(__dirname, './style.css');
        reply.file(path);
      }
  }]);
});

server.start(() => {
  console.log(`server running on port: ${server.info.uri}`);
});
