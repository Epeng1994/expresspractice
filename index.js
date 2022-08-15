const server = require('./src/api/server.js')

server.listen(9000, ()=>{
  console.log('Server up')
})