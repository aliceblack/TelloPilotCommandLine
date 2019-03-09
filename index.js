/* Tello */
const dgram = require('dgram');
const PORT = 8889;
const HOST = '192.168.10.1';
const drone = dgram.createSocket('udp4');
drone.bind(PORT);

/* Flight */
function handleError(err) {
  if (err) {console.log('🔥 Error '+err);}
}

drone.on('message', message => {
    console.log("🤖 "+ message);
});


/* Command line */
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    switch(str) {
        case "o":
            drone.send('command', 0, 'command'.length, PORT, HOST, handleError);
            console.log("📡 SDK mode");
            break;
        case "p":
            drone.send('takeoff', 0, 'takeoff'.length, PORT, HOST, handleError);
            console.log("✈️ takeoff");
            break;
        case "w":
            drone.send('forward 20', 0, 'forward 20'.length, PORT, HOST, handleError);
            console.log("    🔺");
            break;
        case "s":
            drone.send('back 20', 0, 'forward 20'.length, PORT, HOST, handleError);
            console.log("    🔻");
            break;
        case "a":
            drone.send('left 20', 0, 'left 20'.length, PORT, HOST, handleError);
            console.log("👈");
            break;
        case "d":
            drone.send('right 20', 0, 'right 20'.length, PORT, HOST, handleError);
            console.log("        👉");
            break;
        case "i":
            drone.send('up 20', 0, 'up 20'.length, PORT, HOST, handleError);
            console.log("        👉");
            break;
        case "k":
            drone.send('down 20', 0, 'down 20'.length, PORT, HOST, handleError);
            console.log("        👉");
            break;
        case "h":
            drone.send('land', 0, 'land'.length, PORT, HOST, handleError);
            console.log("⚠️ Landing");
    }
})