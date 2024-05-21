const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4000 });
const wssOther = new WebSocket.Server({ port: 4040 });
const clients = [];
// สร้าง websockets server ที่ port 4000
wss.on('connection', function connection(ws) { // สร้าง connection
    ws.send("Hello Intech")
    console.log('INTECH connection');
    clients.push(ws);
  
    ws.on('message', function incoming(message) {
    // รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
      console.log('received: %s', message);
      clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(String(message));
        }
      });
    });
  ws.on('close', function close() {
    // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
      console.log('INTECH disconnected');
      const index = clients.indexOf(ws);
      if (index !== -1) {
        clients.splice(index, 1);
      }
    });


});


