var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
destructivelyAppendKitten(Ralph)

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
destructivelyPrependKitten(Bob)

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [kittens, ..."Broom"]
}
appendKitten(Broom)