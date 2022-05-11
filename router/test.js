
const router = require('express').Router()

router.get('/', (req,res)=>{
    console.log('api work')
    res.send({test : 'Hello World!'})
})


module.exports = router