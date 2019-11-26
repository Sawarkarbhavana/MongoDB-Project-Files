var events = require ('events');
var eventEmitter = new events.EventEmitter();
 
//create an eventhandler:

var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign EventHandler to an event:
eventEmitter.on ('scream', myEventHandler);

//fire the "scream" event:
eventEmitter.emit('scream');