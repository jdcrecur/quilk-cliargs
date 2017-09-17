var q = require('./dist/quilkCliargs');

console.log( q.getAll([
  'devmode',
  'arg2=one|two|potatoes',
  '--arg3=2742',
  '-someOtherArg'
]))