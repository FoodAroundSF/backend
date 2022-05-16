const router = require('express').Router()
const {RestaurantInfo, RestaurantPhoto} = require('../database/models/index')
const fs = require('fs')

router.get('/', async(req,res)=>{
    console.log('메인리스트 요청 들어옴')
    const restuarantLists = await RestaurantInfo.findAll()
    const result = []
    for (const restuarantList of restuarantLists){
        const mainPhoto = await RestaurantPhoto.findOne({where:{restaurant_id : restuarantList.restaurant_id}})
        console.log(mainPhoto)
        console.log(mainPhoto.photoRoute)
        result.push({
            restaurantTitle : restuarantList.restaurantTitle,
            restaurantMainPhoto : mainPhoto.photoRoute,
            restaurantTimeOpen : restuarantList.restaurantTimeOpen,
            restaurantTimeClose : restuarantList.restaurantTimeClose,
            restaurantSpot : restuarantList.restaurantSpot,
            restaurantScore : restuarantList.restaurantScore,
            restaurantXLng : restuarantList.restaurantXLng,
            restaurantYLat : restuarantList.restaurantYLat,
            restaurantCategory : restuarantList.restaurantCategory,
            createAt : restuarantList.createAt,
            updateAt : restuarantList.updateAt,
            restaurantPhoneNum : restuarantList.restaurantPhoneNum,  
        })
    }
    console.log(result.length)
    res.send(result)
})

module.exports = router