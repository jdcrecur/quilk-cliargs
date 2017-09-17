export default class QuilkCliargs {

  static getAll ( originalArgs ) {

    originalArgs = originalArgs || process.argv

    /**
     * The args can be a string, or variable/value pair where the value can either be a string or numeric array with each position separated by a |
     * Example input:
     * node server.js devmode arg2=one|two|potatoes arg3=2742 someOtherArg
     * Return of above example would be a js object like:
     * {
     * 		devmode: true,
     * 		arg2 : ['one', 'two', 'potatoes'],
     * 		arg3 : 2742,
     * 		someOtherArg : false
     * }
     */
      //get the arguments passed to the file
    let cliArgsObj = {},
      args = []

    function add (valueToAdd) {
      if (args.indexOf(valueToAdd) === -1) {
        args.push(valueToAdd)
      }
    }

    function addToObj (key, value) {
      if (cliArgsObj[key]) {
        if (!Array.isArray(cliArgsObj[key])) {
          cliArgsObj[key] = [cliArgsObj[key]]
        }
        cliArgsObj[key].push(value)
      }
      else {
        cliArgsObj[key] = value
      }
    }

    originalArgs.forEach(function (val, key) {
      if (originalArgs[key].substring(0, 2) === '--') {
        add(originalArgs[key].substring(2, originalArgs[key].length))
      }
      else if (originalArgs[key].substring(0, 1) === '-') {
        add(originalArgs[key].substring(1, originalArgs[key].length))
      }
      else {
        add(originalArgs[key])
      }
    })

    args.forEach(function (val) {
      //check if the arg is a variable=value pair
      if (val.indexOf('=') > 0) {

        val = val.split('=')

        //split the value with the | if | exists in string
        if (val[1].indexOf('|') > 0) {
          //break the val[1] into an array
          //else simply place the value
          addToObj(val[0], val[1].split('|'))
        }
        else {
          //else simply place the value
          addToObj(val[0], val[1])
        }
      }
      else {
        addToObj(val, true)
      }
    })
    return cliArgsObj
  }
}