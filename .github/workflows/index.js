
function onMessage(t){
            const e = t.data.slice(8);
             console.log(e);
        }
const WebSocket = require('ws');
const webSocket = new WebSocket('wss://mt5wademo.fftrader.cz/terminal');
webSocket.binaryType = 'arraybuffer';

webSocket.on('open', () => {
  console.log('WebSocket connection established');
});

webSocket.on('message', onMessage);

webSocket.on('error', (error) => {
  console.error('WebSocket connection error:', error);
});

webSocket.on('close', (event) => {
  console.log('WebSocket connection closed with code:', event.code, 'reason:', event.reason);
});
webSocket.on('close', (event) => {
  console.log('WebSocket connection closed:', event);
});
setTimeout(() => {
  if (webSocket.readyState !== WebSocket.OPEN) {
    console.error('WebSocket connection could not be established');
    webSocket.close();
  }
}, 5000);
