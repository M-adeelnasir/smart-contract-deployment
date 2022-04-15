const assert = require('assert');
const ganache = require('ganache-cli');
const fs = require('fs');
const Web3 = require('web3');
// const compile = require('../compile')
// const { interface, bytecode } = require('../compile')
const { abi, bytecode } = require('../compile');





const web3 = new Web3(ganache.provider());


let accounts;
let inbox;
beforeEach(async () => {
    // console.log(abi);
    // console.log(bytcode);
    //get all accounts
    accounts = await web3.eth.getAccounts();


    inbox = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode, arguments: ['Hi there !'] })
        .send({ from: accounts[0], gas: '1000000' });

})

describe('Inbox', () => {
    it('deploy contract', () => {
        console.log(inbox);
    })
})




