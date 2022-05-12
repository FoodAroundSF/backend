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


app.get('/tit', (req,res)=>{
  var form = new FormData();
  var data = fs.readFileSync('./photo/sector1/롯데리아.jpg')

  form.append('part1', data, '롯데리아.jpg');
  form.append('part2', 'part 2 data');
  res.setHeader('Content-Type', 'multipart/form-data; boundary='+form._boundary);
  console.log(form._boundary)
  // res.setHeader('Content-Type', 'image/jpg');
    // res.setHeader('Content-Type', 'text/plain');
  // res.send(data)
  form.pipe(res);
})

//라우터 주소
app.use('/api/test', test)
app.use('/api/mainList', mainList)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
