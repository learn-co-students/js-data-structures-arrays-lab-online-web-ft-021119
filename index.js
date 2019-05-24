// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
  return drivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
  return drivers
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers
}

function appendDriver(name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver(name) {
  return drivers.slice(0,drivers.length-1);
}

function removeFirstDriver(name) {
  return drivers.slice(1, drivers.length)
}
