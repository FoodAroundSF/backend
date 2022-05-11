module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'menu',
      {
        menu_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'forienkey용'
        },
        restaurant_id: {
          type: DataTypes.INTEGER,
          comment: '가게 아이디(foreignkey)'
        },
        menuName: {
          type: DataTypes.STRING,
          comment: '메뉴 이름'
      },
        menuCategory: {
          type: DataTypes.STRING,
          comment: '메뉴 카테고리, 가게에 따라서 나누기'
      },
      menuMoney: {
        type: DataTypes.INTEGER,
        comment: '메뉴 가격'
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