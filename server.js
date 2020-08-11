const express = require('express');
const { emit } = require('process');
const app = express();
var http = require('http').createServer(app)
var io = require('socket.io')(http);
const port = 3000;

app.use( express.static( __dirname + '/client' ));

app.get('/', (req, res) => {
    res.sendFile( path.join( __dirname, 'client', 'index.html' ));
    
})

io.on('connection',(socket) => {
    socket.on('connection', (socket) => {
        io.emit('user joined',socket)
    })
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

http.listen(port, () => {
    console.log(`Port running on ${port}` )
})