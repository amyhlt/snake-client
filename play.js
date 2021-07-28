const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log("Hello Server!");
    conn.write('Hello from client!');
  });

  return conn;
};

console.log("Connecting ...");
connect();