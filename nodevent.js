var fs = require ('fs');
var rs = fs.createReadStream('./nodevent.js');
rs.on('open', function() {
    console.log('The file is open');
});

