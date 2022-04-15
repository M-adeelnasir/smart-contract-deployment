const fs = require('fs');
const solc = require('solc');


function compileContract() {
    let Inbox = fs.readFileSync('./contracts/Inbox.sol', 'utf8')
    let complierInput = {
        language: 'Solidity',
        sources:
        {
            'Inbox.sol':
            {
                content: Inbox
            }
        },
        settings:
        {
            optimizer:
            {
                enabled: true
            },
            outputSelection:
            {
                '*': {
                    '*': ['*']
                }
            }
        }
    };
    console.log('compiling contract.....');
    // parses solidity to English and strings 
    var output = JSON.parse(solc.compile(JSON.stringify(complierInput)));
    console.log('Contract Compiled');


    var outputContracts = output.contracts['Inbox.sol']['inbox']

    // exports ABI interface
    module.exports.abi = outputContracts.abi;

    // // exports bytecode from smart contract
    module.exports.bytecode = outputContracts.evm.bytecode.object;



}

compileContract()