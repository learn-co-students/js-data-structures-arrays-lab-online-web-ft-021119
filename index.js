// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(appendix) {
  drivers.push(appendix)
}

function destructivelyPrependDriver(prefix) {
  drivers.unshift(prefix)
}

function destructivelyRemoveLastDriver(remove) {
  drivers.pop(remove)
}

function destructivelyRemoveFirstDriver(remove) {
  drivers.shift(remove)
}

function appendDriver(appendix) {
  const x = [...drivers, appendix];
  return x;
}

function prependDriver(prefix) {
  const x = [prefix, ...drivers];
  return x;
}

function removeLastDriver() {
  let x = drivers.slice(0, drivers.length - 1);
  return x;
}

function removeFirstDriver() {
  let x = drivers.slice(1);
  return x;
}
