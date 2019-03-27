const Pokemon = require('../Pokemon.js')
const Attack = require('../Attack.js')
const Weakness = require('../Weakness.js')
const Resistance = require('../Resistance.js')

class Pikachu extends Pokemon {
  
  constructor() {
    super(
      name = 'Pikachu',
      hitpoints = 60,
      health = 60,
      energyType = 'Lightning',
      attacks = [
        new Attack('Electric Ring', 50),
        new Attack('Pika Punch', 20)
      ],
      effects = [
        new Weakness('Fire', 1.5),
        new Resistance('Fighting', 20)
      ]
    )
  }

}

module.exports = Pikachu