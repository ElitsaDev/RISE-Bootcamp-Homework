import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({ port: 8080});

wss.on('connection', function connection(ws) {
    console.log("New client connected!");

    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.on('close', () => {
        console.log("Client has disconected!");
    });
    ws.send('something');
});
