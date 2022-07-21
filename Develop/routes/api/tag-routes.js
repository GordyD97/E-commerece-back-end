const router = require('express').Router();
const { databaseVersion } = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  database.findAll(tags)) => {
  res.json(database)
  }
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  database.findOne({
 
  where: {
    id : req.params.id
    }
  })
  .then((tags)=> res.json(tags))
  .catch((err) => res.json(err))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  database.create(req.body)
  .then((tags)=> res.json(tags))
  .catch((err)=> res.json(err))
  
  
  // create a new tag
  // try {
  // database.create(req.body);
  //  res.status(200).json(database)
  // } catch (err) {
  //    res.status(400).json(err);
  // };
  //  .then((tags) => res.json(tags))

  })


router.put('/:id', (req, res) => {
  try {
    database.update(req.body, {
      where :{
        id: req.params.id,
      },
    });
    if (!database[0]) {
      res.status(404).json({ message: 'no tag data foud'});
      return;
    }
    res.status(200).json(database);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
