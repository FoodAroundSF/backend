const router = require('express').Router()
const {RestaurantInfo, RestaurantPhoto} = require('../database/models/index')
const fs = require('fs')

router.get('/', async(req,res)=>{
    console.log('추천리스트 요청 들어옴')
    const restuarantLists = await RestaurantInfo.findAll()
    const allRest = []
    const result = []

    function getRandomInt(min, max) { //min ~ max 사이의 임의의 정수 반환
        return Math.floor(Math.random() * (max+1 - min)) + min;
    }
    var i = 0
    while(i<3){
        const howManyRest = restuarantLists.length
        const randomNum = getRandomInt(1,howManyRest)
        console.log(randomNum)
        console.log('값 길이',howManyRest)
        console.log('결과 랜덤 배열',allRest)
        if(i==0){
            allRest.push(randomNum)
            i++
        }
        else{
            if(allRest.indexOf(randomNum) === -1){
                allRest.push(randomNum)
                console.log('이거가 random임', allRest)
                i++
            }
        }
    }
    for(const element of allRest){
        const selectedRestaurant = await RestaurantInfo.findOne({where : {restaurant_id : element}})
        console.log('1111111111',selectedRestaurant)
        const mainPhoto = await RestaurantPhoto.findOne({where:{restaurant_id : selectedRestaurant.restaurant_id}})
        result.push({
            restaurantTitle : selectedRestaurant.restaurantTitle,
            restaurantMainPhoto : mainPhoto.photoRoute,
            restaurantTimeOpen : selectedRestaurant.restaurantTimeOpen,
            restaurantTimeClose : selectedRestaurant.restaurantTimeClose,
            restaurantSpot : selectedRestaurant.restaurantSpot,
            restaurantScore : selectedRestaurant.restaurantScore,
            restaurantXLng : selectedRestaurant.restaurantXLng,
            restaurantYLat : selectedRestaurant.restaurantYLat,
            restaurantCategory : selectedRestaurant.restaurantCategory,
            createAt : selectedRestaurant.createAt,
            updateAt : selectedRestaurant.updateAt,
            restaurantPhoneNum : selectedRestaurant.restaurantPhoneNum, 
        })
    }
    // console.log(allRest.length)

   
   
     res.send(result)
})

module.exports = router