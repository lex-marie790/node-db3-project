const db = require('../data/db-config.js');

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({ id });
};

function findSteps(id) {
    return db('steps as s')
        .join('schemes as sc', 'sc.id', 's.scheme_id')
        .select('s.id', 'sc.scheme_name', 's.step_number','s.instructions')
        .where({ 's.scheme_id': id});
};

function add(schemeData) {
    return db('schemes').insert(schemeData);
};

// function add(schemeData) {
//     return db('schemes').insert(schemeData);
// };

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove(id) {
   return db('schemes').where({ id }).del(); 
};

function addStep(step, scheme_id) {
    return db('steps').where({ scheme_id }).insert(step);
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}