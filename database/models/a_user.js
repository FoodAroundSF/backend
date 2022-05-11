module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'user',
      {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'primarykey용'
        },
        user_id: {
          type: DataTypes.STRING,
          unique: true,
          comment: 'forienkey용 + ID'
        },
        userPW: {
            type: DataTypes.STRING,
            unique: true,
            comment: 'password'
          },
          userNickName: {
            type: DataTypes.STRING,
            unique: true,
            comment: 'nickname'
          },
          userPhoneNumber: {
            type: DataTypes.STRING,
            unique: true,
            comment: 'forienkey용'
          },
        createAt: {
            type: DataTypes.DATE,
            comment: 'user 최초 등록'
        },
        updateAt: {
            type: DataTypes.DATE,
            comment: 'user 정보 수정'
        },
        deleteAt: {
            type: DataTypes.DATE,
            comment: 'user 탈퇴 날짜'
        },

      },
      {
        timestamps: false
      }
    )
  }