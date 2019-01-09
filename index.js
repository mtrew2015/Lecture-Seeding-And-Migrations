const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 5434;

server.use(express.json());

// INSERT INTO crayons (color, perc_used) VALUES ('red', .9)
server.post('/crayons', (req, res) => {
  const crayon = req.body;
  db('crayons').insert(crayon)
  .then(ids => {
    res.status(201).json(ids);
  })
  .catch(err => {
    res.status(500).json({err: 'Failed to insert crayon'});
  });
});

// SELECT * FROM crayons;
server.get('/crayons', (req, res) => {
  db('crayons').then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500).json({err: 'Failed to find crayons'});
  });
});

// SELECT * FROM crayons WHERE id = 1
server.get('/crayons/:id', (req, res) => {
  const {id} = req.params;
  db('crayons').where('id', id)
  .then(rows => {
    res.json(rows);
  }).catch(err => {
    res.status(500).json({err: 'Failed to find crayon'});
  })
});

// UPDATE crayons SET perc_used = .75 WHERE id = 1
server.put('/crayons/:id', (req, res) => {
  const {id} = req.params;
  const crayon = req.body;

  db('crayons').where('id', id).update(crayon)
  .then(rowCount => {
    res.json(rowCount);
  })
  .catch(err => {
    res.status(500).json({err: 'Failed to update crayon'});
  });
});

// DELETE FROM crayons WHERE id = 1
server.delete('/crayons/:id', (req, res) => {
  const {id} = req.params;
  db('crayons').where('id', id).del()
  .then(rowCount => {
    res.status(201).json(rowCount);
  }).catch(err => {
    res.status(500).json({err: 'Failed to delete crayon'});
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});