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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    console.log('req.params.id ===>', req.params.id);
    const updateCategory = await Category.update(
      { category_name: req.body.category_name },
      { 
        where: {
          id: req.params.id,
        },
      }
    );
    return res.json(updateCategory);
  }catch (error) {
    res.status(400).json({ message: "data not found"});
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(deleteCategory);
  } catch (error) {
    res.status(400).json({ message: "data not found"});
  }
});

module.exports = router;
