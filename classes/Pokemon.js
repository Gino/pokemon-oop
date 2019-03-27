const Attack = require('../classes/Attack.js')

class Pokemon {

  constructor (name, hitpoints, health, energyType, attacks, effects) {
    this.name = name
    this.hitpoints = hitpoints
    this.health = health
    this.energyType = energyType
    this.attacks = attacks
    this.effects = effects
  }

  attack (attack, opponent) {
    if (!(attack instanceof Attack) && !(opponent instanceof Pokemon)) return 'Invalid pokemon or attack'
    let damage = attack.damage

    const opponentWeakness = opponent.effects[0]
    const opponentResistance = opponent.effects[1]

    if (this.energyType === opponentWeakness.energyType) {
      damage = attack.damage * opponentWeakness.multiplier
    }

    if (this.energyType === opponentResistance.energyType) {
      damage = attack.damage - opponentResistance.value
    }

    let healthAfterAttack = opponent.health - damage
    
    return opponent.name + "'s health after the attack: " + healthAfterAttack
  }

}

module.exports = Pokemon