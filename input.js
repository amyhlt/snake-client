let connection ;
const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    console.log("Please press w/a/d/s :");
    if (key=== 'w') {
        console.log("Pressed! W");
    
        for (let i = 0; i < 20; i++) {
            setTimeout(()=> {
                connection.write('Name: Smile') 
                connection.write('Move: up')
            }, 300 * i)
        } 
    }
    
      if (key === 'a') {
        console.log("Pressed! A");
    
        for (let i = 0; i < 20; i++) {
            setTimeout(()=> {
                connection.write('Name: Smile') 
                connection.write('Move: right')
            }, 500 * i)
          } 
      }
    
      if (key === 's') {
        console.log("Pressed! S");
    
        for (let i = 0; i < 20; i++) {
            setTimeout(()=> {
                connection.write('Name: Smile') 
                connection.write('Move: left')
            }, 700 * i)
        } 
      }
    
      if (key === 'd') {
        console.log("Pressed! D");
    
        for (let i = 0; i < 20; i++) {
            setTimeout(()=> {
                connection.write('Name: Smile') 
                connection.write('Move: down')
            }, 900 * i)
        } 
      }
    
      
    
       
  }
  module.exports = setupInput;