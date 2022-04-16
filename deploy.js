const HDWalletProvider = require("@truffle/hdwallet-provider");
const assert = require('assert');
const Web3 = require("web3");
const { abi, bytecode } = require('./compile');


const mnemonicPhrase = 'rail cargo scan disagree people pattern actor measure agree useful odor twin';


let provider = new HDWalletProvider(
    mnemonicPhrase,
    'https://goerli.infura.io/v3/69ea7a355b704ace8ac001aca9977ce9'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Deployed from account", accounts[0]);

    let result = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode, arguments: ["Hello"] })
        .send({ from: accounts[0], gas: 1000000 })

    console.log("contract deployed to address ===>", result.options.address);
    provider.engine.stop();
}

deploy()