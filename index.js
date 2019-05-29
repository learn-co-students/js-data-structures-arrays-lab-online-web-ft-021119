// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);

}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let result = [...drivers, (name)];
  return result;
}

function prependDriver(name) {
  let result = [(name), ...drivers];
  return result;
}

function removeLastDriver() {
  let result = drivers.slice(0, drivers.length - 1);
  return result;
}

function removeFirstDriver() {
  let result = drivers.slice(1);
  return result;

}
