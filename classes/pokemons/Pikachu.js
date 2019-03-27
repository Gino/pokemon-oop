const Pokemon = require('../Pokemon.js')
const Attack = require('../Attack.js')
const Weakness = require('../Weakness.js')
const Resistance = require('../Resistance.js')

class Pikachu extends Pokemon {
  
  constructor() {
    super(
      'Pikachu',
      60,
      60,
      'Lightning',
      [
        new Attack('Electric Ring', 50),
        new Attack('Pika Punch', 20)
      ],
      [
        new Weakness('Fire', 1.5),
        new Resistance('Fighting', 20)
      ]
    )
  }

}

module.exports = Pikachu