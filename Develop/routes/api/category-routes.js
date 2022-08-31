const router = require('express').Router();
const { Product, Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const dbCategoryData = await Category.findAll({
      atrribute: [
        'id', 'category_name'
      ],
      include: [
        {
          model: Product,
          attribute: [
            'id',
            'product_name',
            'price',
            'stock',
            'category_id'
          ]
        }
      ]
    });
    res.status(200).json(dbCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const dbCategoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 'category_name'
      ],
      include: [
        {
          model: Product,
          attributes: [
            'id',
            'product_name',
            'price',
            'stock',
            'category_id'
          ]
        }
      ]
    });
    res.status(200).json(dbCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const dbCategoryData = await Category.create({ category_name: req.body.category_name });
    res.status(200).json(dbCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const dbCategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(dbCategoryData);
  } catch (err) {
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const dbCategoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(dbCategoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

=======

// The `/api/categories` endpoint

// get all categories
router.get('/', async(req, res) => {
  try {
    const categoryData = await Category.findAll(
      {
        include: [{ model: Product }],
      }
    );
    if (categoryData.length === 00){
      res.status(404).json({message: "no records found"});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get categories by id
router.get('/:id', async(req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id,
      {
        include: [{ model: Product }],
      }
    );
    if (categoryData == null){
      res.status(404).json({message: "no records found"});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new category
router.post('/', async(req, res) => {
  try {
    const categoryData = await Category.create(
      req.body
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update a category by id
router.put('/:id', async(req, res) => {
  try {
    const categoryData = await Category.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (categoryData[0] == 0){
      res.status(404).json({message: "no records found to update with given id"});
      return;
    }
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete category by id
router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (categoryData == 0){
      res.status(404).json({message: "no records found to delete with given id"});
      return;
    }
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

>>>>>>> 509effdb790591e71209805aa125492ca9f744b6
module.exports = router;