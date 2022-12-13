import io from "socket.io-client"
import fetch from "node-fetch";
const socket = io.connect('http://93.125.99.88:3001/socket.io', {'transports': ['xhr-polling']});



socket.on('connect', function () {
    console.log('Connected!');
});

socket.emit('data', {})

// function fetchData() {
//     fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
//         .then(res => res.json())
//         .then(json => socket.emit('data', json))
// }
//
//
// setInterval(fetchData, 1000)
