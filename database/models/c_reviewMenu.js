module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'reviewMenu',
      {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'primarykey용'
        },
        menu_id: {
          type: DataTypes.INTEGER,
          comment: 'menu에서 foreignkey로 가져옴'
        },
        
        review_id: {
          type: DataTypes.INTEGER,
          comment: '리뷰foreignkey'
        },
        menuName: {
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