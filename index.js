const routes = require('./router.js')

let Pikachu = require('./classes/pokemons/Pikachu.js')
let Charmeleon = require('./classes/pokemons/Charmeleon.js')

init = () => {
  Pikachu = new Pikachu
  Charmeleon = new Charmeleon
}

attack = (attacker, opponent, attack) => {
  attack = attacker.getAttack(attack)
  if (attack === null) return

  const attackerHealth = attacker.health
  const opponentHealth = opponent.health
  
  let damage = attack.damage

  const opponentWeakness = opponent.effects[0]
  const opponentResistance = opponent.effects[1]

  const attackerWeakness = attacker.effects[0]
  const attackerResistance = attacker.effects[1]

  // If the attacker his energy type is equal to the weakness of the opponent, multiply the damage of the attack.
  if (attacker.energyType === opponentWeakness.energyType) {
    damage = attack.damage * opponentWeakness.multiplier
  }

  // If the attacker his energy type is equal to the resistance of the opponent, reduce the damage of the attack.
  if (attacker.energyType === opponentResistance.energyType) {
    damage = attack.damage - opponentResistance.value
  }

  let healthAfterAttack = opponentHealth - damage

  console.log(opponent.name + "'s health: " + healthAfterAttack)
}

init()

attack(Pikachu, Charmeleon, 'Electric Ring')
attack(Charmeleon, Pikachu, 'Head Butt')
