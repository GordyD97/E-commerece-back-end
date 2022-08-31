// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
<<<<<<< HEAD
Product.belongsTo(Category, { foreignKey: 'category_id' });
// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id' });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});
=======
Product.belongsTo(category, {
  foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'prodict_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tag_id'
})

>>>>>>> 509effdb790591e71209805aa125492ca9f744b6

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
