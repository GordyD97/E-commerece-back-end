const router = require('express').Router();
const { Product, Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  await Category.findAll({
    include: ['id', Category_name],
    include: [{
      model: Product,
      attributes: [
        'id',
        'Category_name'
      ]
    }],
  })
    .then().status(200).json(CategoryData);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  await Category.findOne({
    include: ['id', Category_name],
    include: [{
      model: Product,
      attributes: [
        'id',
        'category_name'
      ]
    }],
  })
    .then().status(200).json(CategoryData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  try {
    const tagdata = await Category.create({ category_name: req.body.category_name });
    res.status(200).json(tagdata);
  } catch (err) {
    res.status(500).json(err);
  }
  
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
