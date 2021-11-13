// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    as: 'Associated_Tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    as: 'Associated_Products'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};