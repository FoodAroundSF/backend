module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'review',
      {
        review_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'foreignkey 용'
        },
        restaurant_id: {
          type: DataTypes.INTEGER,
          comment: '리뷰가 작성된 가게'
        },
        user_id: {
          type: DataTypes.STRING,
          comment: '리뷰를 작성한 사람'
        },
        reviewPoint: {
          type: DataTypes.INTEGER,
          comment: '별점'
        },
        reviewContent: {
          type: DataTypes.STRING,
          comment: '별점'
        },
        reviewCreateAt: {
          type: DataTypes.DATE,
          comment: '메뉴 최초 등록'
      },
      reviewUpdateAt: {
        type: DataTypes.DATE,
        comment: '메뉴 정보 수정'
    },

      },
      {
        timestamps: false
      }
    )
  }