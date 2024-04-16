#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs";

let input = await inquirer.prompt ([{
    name:"folder",
    type:"input",
    message:`Enter the folder name....`

},
{
    name:"quantity",
    type:"input",
    message:"Mention the create  quantity..... "
}
]);
for(let i=1; i<=input.quantity;i++){
    fs.mkdirSync(`${input.folder} ${i}`) 
console.log(`folder "${input.folder} ${i}" created successfully.`)
}