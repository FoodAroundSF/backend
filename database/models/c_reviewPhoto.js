module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'reviewPhoto',
      {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'primarykey용'
        },
        menu_id: {
          type: DataTypes.INTEGER,
          comment: '어떤 메뉴의 사진인지'
        },
        restaurant_id: {
          type: DataTypes.INTEGER,
          comment: '어떤 가게의 사진인지'
        },
        review_id: {
          type: DataTypes.INTEGER,
          comment: '어떤 리뷰의 사진인지'
        },
        photoName: {
          type: DataTypes.STRING,
          comment: '사진 이름'
      },
        
      
        createAt: {
            type: DataTypes.DATE,
            comment: '메뉴 최초 등록'
        },
        updateAt: {
            type: DataTypes.DATE,
            comment: '메뉴 정보 수정'
        },
      },
      {
        timestamps: false
      }
    )
  }