const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  database.findOne({

    where: {
      id: req.params.id
    }
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.json(err))
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagdata = await tag.create({ tag_name: req.body.tag_name });
    res.status(200).json(tagdata);
  } catch (err) {
    res.status(500).json(err);
  }




  // database.create(req.body)
  //   .then((tags) => res.json(tags))
  //   .catch((err) => res.json(err))


  // create a new tag
  // try {
  // database.create(req.body);
  //  res.status(200).json(database)
  // } catch (err) {
  //    res.status(400).json(err);
  // };
  //  .then((tags) => res.json(tags))

});


router.put('/:id', (req, res) => {
  try {
    database.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dbTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

  try {
    const tagData = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (tagData == 0) {
      res.status(404).json({ message: "no records found to delete with given id" });
      return;
    }
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
