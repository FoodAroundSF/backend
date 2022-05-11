'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// //db foreign key 설정용
db.Menu = require('./b_menu')(sequelize, Sequelize);
db.RestaurantInfo = require('./a_restaurantInfo')(sequelize, Sequelize);
db.RestaurantPhoto = require('./b_restaurantPhoto')(sequelize, Sequelize);
db.Review = require('./b_review')(sequelize, Sequelize);
db.ReviewMenu = require('./c_reviewMenu')(sequelize, Sequelize);
db.ReviewPhoto = require('./c_reviewPhoto')(sequelize, Sequelize);
db.User = require('./a_user')(sequelize, Sequelize);

//식당정보 테이블에서 메뉴테이블로 restaurant_id를 foreignkey로 설정
db.RestaurantInfo.hasMany(db.Menu,{foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})
db.Menu.belongsTo(db.RestaurantInfo, {foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})

//식당정보 테이블에서 식당사진테이블로 restaurant_id를 foreignkey로 설정
db.RestaurantInfo.hasMany(db.RestaurantPhoto,{foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})
db.RestaurantPhoto.belongsTo(db.RestaurantInfo, {foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})

//식당정보 테이블에서 리뷰테이블로 restaurant_id를 foreignkey로 설정
db.RestaurantInfo.hasMany(db.Review,{foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})
db.Review.belongsTo(db.RestaurantInfo, {foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})

//식당정보 테이블에서 리뷰 사진테이블로 restaurant_id를 foreignkey로 설정
db.RestaurantInfo.hasMany(db.ReviewPhoto,{foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})
db.ReviewPhoto.belongsTo(db.RestaurantInfo, {foreignKey : 'restaurant_id', sourceKey:'restaurant_id'})

//유저 테이블에서 리뷰테이블로 user_id foreignkey로 설정
db.User.hasMany(db.Review,{foreignKey : 'user_id', sourceKey:'user_id'})
db.Review.belongsTo(db.User, {foreignKey : 'user_id', sourceKey:'user_id'})

//리뷰 테이블에서 리뷰사진테이블로 review_id를 foreignkey로 설정
db.Review.hasMany(db.ReviewPhoto,{foreignKey : 'review_id', sourceKey:'review_id'})
db.ReviewPhoto.belongsTo(db.Review, {foreignKey : 'review_id', sourceKey:'review_id'})

//리뷰 테이블에서 리뷰메뉴테이블로 review_id foreignkey로 설정
db.Review.hasMany(db.ReviewMenu,{foreignKey : 'review_id', sourceKey:'review_id'})
db.ReviewMenu.belongsTo(db.Review, {foreignKey : 'review_id', sourceKey:'review_id'})

//메뉴 테이블에서 리뷰사진테이블로 menu_id를 foreignkey로 설정
db.Menu.hasMany(db.ReviewPhoto,{foreignKey : 'menu_id', sourceKey:'menu_id'})
db.ReviewPhoto.belongsTo(db.Menu, {foreignKey : 'menu_id', sourceKey:'menu_id'})


module.exports = db;
