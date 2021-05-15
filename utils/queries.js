const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'Panzervor1',
    database: 'bayareadb',
  });

const readAuctions = () => {
    console.log('Selecting all auctions...\n');
    connection.query('SELECT * FROM auctions', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };
  

  const returnAuctionItems = async() => 
  {
      return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM auctions', (err, res) => 
      {
        if(err) throw err;
        itemMap = res.map(item => item["item"])
        resolve(itemMap);
      })
    })
  }
  module.exports = {readAuctions, returnAuctionItems, connection}