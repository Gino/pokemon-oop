const Pokemon = require('../Pokemon.js')
const Attack = require('../Attack.js')
const Weakness = require('../Weakness.js')
const Resistance = require('../Resistance.js')

class Charmeleon extends Pokemon {
  
  constructor() {
    super()

    this.name = 'Charmeleon'
    this.hitpoints = 60
    this.health = 60
    this.energyType = 'Fire'
    this.attacks = [
      new Attack('Head Butt', 10),
      new Attack('Flare', 30)
    ]
    this.effects = [
      new Weakness('Water', 2),
      new Resistance('Lightning', 10)
    ]
  }

  getAttack(name) {
    const attack = this.attacks.filter(a => {
      return a.name === name
    })

    return (attack.length > 0) ? attack[0] : null
  }

}

module.exports = Charmeleon