let Pikachu = require('./classes/pokemons/Pikachu.js')
let Charmeleon = require('./classes/pokemons/Charmeleon.js')

init = () => {
  Pikachu = new Pikachu
  Charmeleon = new Charmeleon

  console.log(Pikachu.attack(Pikachu.attacks[0], Charmeleon))
}

init()
