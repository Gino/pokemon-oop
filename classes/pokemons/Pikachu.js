const Pokemon = require('../Pokemon.js')
const Attack = require('../Attack.js')
const Weakness = require('../Weakness.js')
const Resistance = require('../Resistance.js')

class Pikachu extends Pokemon {
  
  constructor() {
    super()

    this.name = 'Pikachu'
    this.hitpoints = 60
    this.health = 60
    this.energyType = 'Lightning'
    this.attacks = [
      new Attack('Electric Ring', 50),
      new Attack('Pika Punch', 20)
    ]
    this.effects = [
      new Weakness('Fire', 1.5),
      new Resistance('Fighting', 20)
    ]
  }

  getAttack(name) {
    const attack = this.attacks.filter(a => {
      return a.name === name
    })

    return (attack.length > 0) ? attack[0] : null
  }

}

module.exports = Pikachu