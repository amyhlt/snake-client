const net = require("net");
const {connect} = require('./client');
const setupInput = require('./input');
console.log("Connecting ...");

const conn = connect();
for (let i = 0; i < 20; i++) {
    setTimeout(()=> {
      conn.write('Name: Smile') 
      conn.write('Move: up')
    }, 300 * i)
} 
for (let i = 0; i < 20; i++) {
  setTimeout(()=> {
    conn.write('Name: Smile') 
    conn.write('Move: right')
  }, 500 * i)
} 
for (let i = 0; i < 20; i++) {
    setTimeout(()=> {
      conn.write('Name: Smile') 
      conn.write('Move: left')
    }, 700 * i)
} 

for (let i = 0; i < 20; i++) {
    setTimeout(()=> {
      conn.write('Name: Smile') 
      conn.write('Move: down')
    }, 900 * i)
} 

setupInput();