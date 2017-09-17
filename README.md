# jdc-node-cliarg-reader
Node command line argument reader.

Example call to a file named `server.js` might look like:

```
node server.js devmode arg2=one arg2=two arg2=potatoes -arg3=2742 --someOtherArg 
```

In your application file you can now access these arguments very easily using the `readAll()` function:
```
var cliArgs = require('cliarg').readAll();
console.log( cliArgs );
```

The console log output would be:
```
{
    devmode: true,
    arg2 : ['one', 'two', 'potatoes'],
    arg3 : 2742,
    someOtherArg : true
}
```

One additional thing to note is that this module normalises all the pre-dashes. In the example above notice how `-arg3` went in with a dash but the output was without. The same is true for a double dasg.

the benefit to this is, in your program you can simply access the object returned from the readAll() function in a std object fashion eg:
```
if( cliArgs.someOtherArg ){
    //do something magical
}
```

If the dashes were not normalised then this would be quite annoying code to write:
```
if( cliArgs['--someOtherArg'] ){
    //do something magical with this messy code :)
}
```
