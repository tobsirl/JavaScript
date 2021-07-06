const { getItem, getItems, addItem } = require('../controllers/itemController');

// item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts);

  // Get a single item
  fastify.get('/items/:id', getItemOpts);

  // Add item
  fastify.post('/items', postItemOpts);

  // Delete Item
  fastify.delete('/items/:id' deleteItemOpts);

  done();
}

module.exports = itemRoutes;
