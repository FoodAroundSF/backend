module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'restaurantPhoto',
      {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'primarykey용'
        },
        
        restaurant_id: {
          type: DataTypes.INTEGER,
          comment: '사진이 저장된 가게(foreign)'
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
        mainPhoto: {
          type: DataTypes.INTEGER,
          comment: '메인으로 사용할 사진은 1'
        },
        photoRoute: {
          type: DataTypes.STRING,
          comment: '사진 저장 경로'
        },
      },
      {
        timestamps: false
      }
    )
  }