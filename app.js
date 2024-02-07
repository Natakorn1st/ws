// ทำการเชื่อม Websocket Server ตาม url ที่กำหนด
// var connection = new WebSocket('ws://localhost:4000')
// var connection = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/')
var connection = new WebSocket('wss://i-ws.onrender.com')
connection.onopen = function () {
  // จะทำงานเมื่อเชื่อมต่อสำเร็จ
  console.log("connect webSocket");
  connection.send("Hello ABCDEF"); // ส่ง Data ไปที่ Server
};
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error);
};
connection.onmessage = function (e) {
  // log ค่าที่ถูกส่งมาจาก server
  console.log("message from server: ", e.data);
  createDivElement(e.data)
};

function createDivElement(data) {
    var newDiv = document.createElement('div')
    newDiv.setAttribute("id", "myDiv");
    newDiv.innerHTML = data
    document.body.appendChild(newDiv)
  }

  document.getElementById('btnSend').addEventListener('click',(e)=>{
    console.log('send')
    connection.send("Hello wolrd"); 
  })