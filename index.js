const express = require('express')
var app = express()
//같은 서버에서 통신을 가능하게 해주는 cors 모듈
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8080
//sequelize참조 
const {sequelize} = require('./database/models/index')

//form-data
const fs = require('fs')
var FormData = require('form-data');

//라우터들 참조해오기
var test = require('./router/test')
var mainList = require('./router/mainList')
var recommendList = require('./router/recommendList')

//sequelize랑 연결 확인하기
sequelize
  .sync()
  .then(()=> console.log('connection databases'))
  .catch(error => console.error('error in database connection', error))

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.get('/',(req,res)=> {
  console.log('main router')
  res.send('hello world')
})


app.use(express.static('photo'))



app.get('/tit', (req,res)=>{
  
})

//라우터 주소
app.use('/api/test', test)
app.use('/api/mainList', mainList)
app.use('/api/recommendList', recommendList)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
