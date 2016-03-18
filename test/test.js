var Tiler = require('../index'),
    fs = require('fs'),
    assert = require('assert');

var tiler = new Tiler(__dirname+'/sample','png');

tiler.getTile(0xd50, 0x971, 2, function(error, tile) {
    if (error) {
        throw error;
    }
    assert.ok(tile);   
    assert.ok(!isNaN(Date.parse(tile.lastModified)));
    assert.deepEqual(tile.data, fs.readFileSync(__dirname + '/sample/_alllayers/L02/R00000971/C00000d50.png')); 
    console.log('success!');   
});