var socket = io();
function sendSocket(e) {
e.preventDefault();
var socket = io();
let ele = e.target[0].value
socket.emit('chat message',ele);
e.target.reset();
return false;
}

socket.on('chat message', function(msg) {
const element = document.createElement('LI');
element.innerHTML = msg;
const list = document.querySelector('#messages');
list.append(element);
})

console.log(socket.emit('user joined'))
document.querySelector('form').addEventListener('submit', sendSocket)