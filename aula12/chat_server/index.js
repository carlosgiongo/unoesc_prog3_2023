const express = require('express')
const app = express()
const http = require('http')
const path = require('path')

const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)
const port = 3000

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
  let name;
  let _room = 'Geral';

  console.log('New user connected')

  socket.join(_room);

  //Ações do chat
  socket.on('joining msg', (username, room) => {
    name = username
    _room = room
    io.to(room).emit('chat message', `--${name} joined the chat--`)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
    io.to(_room).emit('chat message', `--${name} left the chat ${_room}--`)
  })

  socket.on('chat message', (msg) => {
    socket.to(_room).emit('chat message', msg)
  })

  socket.on(`change room`, (room) => {
    io.to(_room).emit('chat message', `--${name} left the chat ${_room}--`)
    socket.leave(_room)
    socket.join(room)
    _room = room
    io.to(room).emit('chat message', `--${name} joined the chat ${room}--`)
  })

  socket.on(`sacudir`, (room) => {
    io.to(room).emit('sacudir')
    io.to(room).emit('chat message', `--${name} sacudiu a sala ${room}--`)
  })
  // ---------------
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
