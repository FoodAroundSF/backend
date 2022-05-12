const router = require('express').Router()
const {RestaurantInfo} = require('../database/models/index')

const fs = require('fs')

router.get('/', async(req,res)=>{
    console.log('메인리스트 요청 들어옴')
    const restuarantLists = await RestaurantInfo.findAll()
    const result = []
    for (const restuarantList of restuarantLists){
        const e = fs.readFile('./photo/sector1/롯데리아.jpg', (error, data)=>{
            console.log('여기 사람 있어요!')
            if(error) {
                console.log(error);
                return res.status(500).send(error)
            }
            const a = JSON.stringify(data)
            return a
        })
        
        result.push({
            restaurantTitle : restuarantList.restaurantTitle,
            // restaurantMainPhoto : e,
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
    res.send(result)
})



module.exports = router