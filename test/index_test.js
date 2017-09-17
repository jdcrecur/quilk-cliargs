import quilkCliargs from '../lib/index'

let dummyCliArray = [
  'devmode',
  'arg2=one|two|potatoes',
  '--arg3=2742',
  '-someOtherArg'
]

let expected = {
  'devmode'     : true,
  'arg2'        : ['one', 'two', 'potatoes'],
  'arg3'        : '2742',
  'someOtherArg': true
}

let unExpected = {
  'devmode'     : false,
  'arg1'        : ['one', 'two', 'potatoes'],
  'arg3'        : '2742',
  'someOtherArg': 'true'
}

describe('quilkCliargs Tests', () => {
  it('Expect the return to match the expected', (done) => {
    if (JSON.stringify(quilkCliargs.getAll(dummyCliArray)) === JSON.stringify(expected)) {
      done()
    }
    else {
      done('The response should have matched the expected output')
    }
  })

  it('Expect the return to not match the expected', (done) => {
    if (JSON.stringify(quilkCliargs.getAll(dummyCliArray)) !== JSON.stringify(unExpected)) {
      done()
    }
    else {
      done('The response should not have matched the unexpected var')
    }
  })
})
