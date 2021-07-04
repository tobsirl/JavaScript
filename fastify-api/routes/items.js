const items = require('../items');

// Options for get all items
const getItemsOpts = {
  scheme: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
    },
  },
};

function itemRoutes(fastify, options, done) {
  fastify.get('/items', getItemsOpts, (req, reply) => {
    reply.send(items);
  });

  fastify.get('/items/:id', (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
