const net = require("net");
const {connect} = require('./client');
console.log("Connecting ...");

const conn = connect();
for (let i = 0; i < 10; i++) {
    setTimeout(()=> {
      conn.write('Name: Smile') 
      conn.write('Move: up')
    }, 500 * i)
} 
for (let i = 0; i < 10; i++) {
  setTimeout(()=> {
    conn.write('Name: Smile') 
    conn.write('Move: right')
  }, 1000 * i)
} 
for (let i = 0; i < 10; i++) {
    setTimeout(()=> {
      conn.write('Name: Smile') 
      conn.write('Move: left')
    }, 1500 * i)
} 

for (let i = 0; i < 10; i++) {
    setTimeout(()=> {
      conn.write('Name: Smile') 
      conn.write('Move: down')
    }, 2000 * i)
} 

