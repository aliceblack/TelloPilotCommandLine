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
    switch(key.name) {
        case "o":
            drone.send('command', 0, 'command'.length, PORT, HOST, handleError);
            console.log("📡 SDK mode");
            break;
        case "p":
            drone.send('takeoff', 0, 'takeoff'.length, PORT, HOST, handleError);
            console.log("✈️ takeoff");
            break;
        case "h":
            drone.send('land', 0, 'land'.length, PORT, HOST, handleError);
            console.log("⚠️ Landing");
            break;
        case "w":
            drone.send('forward 40', 0, 'forward 40'.length, PORT, HOST, handleError);
            console.log("    🔺");
            break;
        case "s":
            drone.send('back 40', 0, 'forward 40'.length, PORT, HOST, handleError);
            console.log("    🔻");
            break;
        case "a":
            drone.send('ccw 45', 0, 'ccw 45'.length, PORT, HOST, handleError);
            console.log("↪️");
            break;
        case "d":
            drone.send('cw 45', 0, 'cw 45'.length, PORT, HOST, handleError);
            console.log("        ↩️");
            break;
        case "left":
            drone.send('left 40', 0, 'left 40'.length, PORT, HOST, handleError);
            console.log("👈");
            break;
        case "right":
            drone.send('right 40', 0, 'right 40'.length, PORT, HOST, handleError);
            console.log("        👉");
            break;
        case "up":
            drone.send('up 40', 0, 'up 40'.length, PORT, HOST, handleError);
            console.log("    ⏫");
            break;
        case "down":
            drone.send('down 40', 0, 'down 40'.length, PORT, HOST, handleError);
            console.log("    ⏬");
            break;
        case "i":
            drone.send('flip f', 0, 'flip f'.length, PORT, HOST, handleError);
            console.log("    ➰");
            break;
        case "k":
            drone.send('flip b', 0, 'flip b'.length, PORT, HOST, handleError);
            console.log("    ➰");
            break;
        case "j":
            drone.send('flip l', 0, 'flip l'.length, PORT, HOST, handleError);
            console.log("➰ flip");
            break;
        case "l":
            drone.send('flip r', 0, 'flip r'.length, PORT, HOST, handleError);
            console.log("         ➰");
            break;
    }
})