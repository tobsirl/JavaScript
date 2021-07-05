const items = require('../items');
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

  reply.send({
    id: uuidv4(),
    name,
  });
};

module.exports = {
  getItem,
  getItems,
  addItem,
};
