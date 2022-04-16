const assert = require('assert');
const ganache = require('ganache-cli');
const fs = require('fs');
const Web3 = require('web3');
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
        .deploy({ data: bytecode, arguments: ['adeel'] })
        .send({ from: accounts[0], gas: '1000000' });

})

describe('Inbox', () => {
    it('deploy contract', () => {
        // console.log(inbox);
        assert.ok(inbox.options.address);
    })
    it("Got initial message", async () => {
        const message = await inbox.methods.message().call();

    })

    it("new messged recieved", async () => {
        await inbox.methods.setMessage("bye").send({ from: accounts[0] })

        const msg = await inbox.methods.message().call();
        assert.equal(msg, "bye")

    })
})




