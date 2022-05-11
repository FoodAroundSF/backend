module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'restaurantInfo',
      {
        restaurant_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'foriegn key용'
          },
        restaurantTitle: {
          type: DataTypes.STRING,
          comment: '가게 이름'
        },
        restaurantTimeOpen: {
            type: DataTypes.TIME,
            comment: '가게 여는 시간'
        },
        restaurantTimeClose: {
            type: DataTypes.TIME,
            comment: '가게 닫는 시간'
        },
        restaurantSpot: {
          type: DataTypes.INTEGER,
          comment: '가게 구역1234'
        },
        restaurantScore: {
            type: DataTypes.FLOAT,
            comment: '가게 점수 리뷰추가시 점수 갱신'
        },
        restaurantSpot: {
            type: DataTypes.INTEGER,
            comment: '가게 구역1234'
        },
        restaurantXLng: {
            type: DataTypes.INTEGER,
            comment: '가게 위치 x좌표(lng)'
        },
        restaurantYLat: {
            type: DataTypes.INTEGER,
            comment: '가게 위치 y좌표(lat)'
        },
        restaurantCategory: {
            type: DataTypes.INTEGER,
            comment: '가게 카테고리 조건검색시 활용'
        },
        createAt: {
            type: DataTypes.DATE,
            comment: '가게 정보 최종 등록 시간'
        },
        updateAt: {
            type: DataTypes.DATE,
            comment: '가게 정보 수정 시간'
        },
      },
      {
        timestamps: false
      }
    )
  }