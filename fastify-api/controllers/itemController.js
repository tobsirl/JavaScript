let items = require('../items');
const { v4: uuidv4 } = require('uuid');

const getItems = (req, relpy) => {
  relpy.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);
  reply.send(item);
};

const addItem = (req, reply) => {
  const { name } = req.body;

  const item = {
    id: uuidv4(),
    name,
  };

  items = [...items, item];

  reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;

  items.filter((item) => item.id !== id);

  reply.code(204).send('Item deleted successfully');
};

module.exports = {
  getItem,
  getItems,
  addItem,
  deleteItem,
};
