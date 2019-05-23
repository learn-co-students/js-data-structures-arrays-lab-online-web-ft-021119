let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let drivers_new = [...drivers, name];
  return drivers_new
}

function prependDriver(name) {
  let drivers_new = [name, ...drivers];
  return drivers_new
}

function removeLastDriver() {
  let drivers_new = drivers.slice(0, -1);
  return drivers_new
}

function removeFirstDriver() {
  let drivers_new = drivers.slice(1)
  return drivers_new
}
