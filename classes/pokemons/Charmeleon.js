const Pokemon = require('../Pokemon.js')
const Attack = require('../Attack.js')
const Weakness = require('../Weakness.js')
const Resistance = require('../Resistance.js')

class Charmeleon extends Pokemon {
  
  constructor() {
    super(
      name = 'Charmeleon',
      hitpoints = 60,
      health = 60,
      energyType = 'Fire',
      attacks = [
        new Attack('Head Butt', 10),
        new Attack('Flare', 30)
      ],
      effects = [
        new Weakness('Water', 2),
        new Resistance('Lightning', 10)
      ]
    )
  }
}

module.exports = Charmeleon