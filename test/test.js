var Tiler = require('../index');

var tiler = new Tiler(__dirname+'/sample','png');

tiler.getTile(0xd50, 0x971, 2, function(error, tile) {
    if (error) {
        throw error;
    }
    if (!tile) {
        throw new Error('data is null');
    }
    if (!tile.lastModified) {
        throw new Error('lastModified is null');
    }
    if (!tile.data) {
        throw new Error('data is null');
    }
    if (!tile.data.length === 0) {
        throw new Error('data is empty');
    }
    console.info('success!');
});