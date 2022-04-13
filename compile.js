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
    console.log('compiling contract');
    let compiledContract = JSON.parse(solc.compile(JSON.stringify(complierInput)));
    console.log('Contract Compiled');
    for (let contractName in compiledContract.contracts['Inbox.sol']) {
        console.log(contractName, compiledContract.contracts['Inbox.sol'][contractName].abi);
        let abi = compiledContract.contracts['Inbox.sol'][contractName].abi;
        fs.writeFileSync(`./contracts/bin/${contractName}_abi.json`, JSON.stringify(abi));
        return compiledContract.contracts['Inbox.sol'][contractName];
    }
}

compileContract()