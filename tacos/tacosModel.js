const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(taco) {
  return db('tacos').insert(taco).returning('id');
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('tacos');
}

function findById(id) {
  return null;
}