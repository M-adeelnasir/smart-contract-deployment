const assert = require('assert');
// const ganache = require('ganache-cli');
const Web3 = require('web3');

// const web3 = new Web3(ganache.provider());





class Car {
    park() {
        return "Parked"
    }

    drive() {
        return "stopped"
    }
}

//beforeeach run before execuation on=f it statement
// if we have line of code in multiple it statements then we use beforeEach
let car;
beforeEach(() => {
    car = new Car();
})


//a describe contains multiple it statements
describe('Car', () => {
    it('can park', () => {
        // const car = new Car();
        assert.equal(car.park(), 'Parked')
    });
    it('can stop', () => {
        // const car = new Car();
        assert.equal(car.drive(), 'stopped')
    })
})
