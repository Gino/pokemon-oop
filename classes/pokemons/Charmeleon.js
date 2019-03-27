const Pokemon = require('../Pokemon.js')
const Attack = require('../Attack.js')
const Weakness = require('../Weakness.js')
const Resistance = require('../Resistance.js')

class Charmeleon extends Pokemon {
  
  constructor() {
    super(
      'Charmeleon',
      60,
      60,
      'Fire',
      [
        new Attack('Head Butt', 10),
        new Attack('Flare', 30)
      ],
      [
        new Weakness('Water', 2),
        new Resistance('Lightning', 10)
      ]
    )
  }
}

module.exports = Charmeleon