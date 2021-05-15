const mysql = require('mysql');
const inquirer = require('inquirer');
const {readAuctions, returnAuctionItems, connection} = require('./utils/queries')


connection.connect((err) => 
{
    if(err){ throw err;}
})


async function mainPrompt()
{
    inquirer
    .prompt(
        [
            {
                type: "list",
                name: "choice",
                message: "Welcome to bay area auctions. What would you like to do?",
                choices: ["See items", "Put an item for auction", "Quit"]
            }
        ])
        .then((answer)=>
        {
            console.clear();
            switch(answer.choice)
            {
                case "See items":
                    console.log("--------------------------");
                    returnAuctionItems()
                    .then(items => 
                        {
                            selectItemPrompt(items);
                            connection.end();
                        });
                    break;

                case "Put an item for auction":
                    console.log("Feature under construction");
                    mainPrompt();
                    break;

                case "Quit":
                    connection.end();
                    break;
            }
        })
}

async function selectItemPrompt(itemList)
{
    inquirer
    .prompt(
        [
            {
                type: "list",
                name: "itemChosen",
                message: "Which item would you like to place a bid on? ",
                choices: itemList
            }
        ])
        .then(answer => 
            {
                console.log(answer.itemChosen);
      
            })
} 


//mainPrompt();