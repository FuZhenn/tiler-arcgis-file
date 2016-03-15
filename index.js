var fs = require('fs');

/**
 * Constructor for the tiler-arcgis-xyz
 * 
 * @param {String} root - the root folder of ArcGIS exploded tiles, where the conf.xml stands.
 * @param {String} ext  - the tile file's extension, e.g. png, jpg
 * @class
 */
function tiler(root, ext) {
    this.root = root;
    this.ext = ext;
}

/**
 * Get a tile, Schema is XYZ.
 * Structure of the result tile is :
 * {
 *  lastModified : {Date} Time when tile file last modified
 *  data         : {Buffer}
 * }
 * @param {Number} x - tile x coordinate.
 * @param {Number} x - tile x coordinate.
 * @param {Number} x - tile x coordinate.
 * @param {Function(error, tile)} callback - tile x coordinate.
 * @return  {Object} tile data.
 */
tiler.prototype.getTile=function(x,y,z, callback) {
    var filepath = this.getTilePath(x,y,z);
    fs.stat(filepath, function(err1, stats) {
        if (err1) {
            callback(err1);
            return;
        }    
        fs.readFile(filepath, function(err2, data) {
            if (err2) {
                callback(err2);
                return;
            }
            callback(null, {
               'lastModified' : stats.mtime,
               'data'         : data   
            });
        });
    });
}

tiler.prototype.getTilePath=function(x,y,z) {
    function appendZeros(n) {
        var result = '';
		for (var i = 0, len = n.length(); i < 8 - len; i++) {
			result += '0';
		}
		result += n;
		return result;
    }
    var zFolder = "L" + (z.length() == 1) ? "0" + z : z;
    var xFolder = appendZeros(parseInt(x,10).toString(16));	
    var yFolder = appendZeros(parseInt(y,10).toString(16));
	return this.root
				+ "/_alllayers/"
				+ zFolder
				+ "/R"
				+ yFolder
				+ "/C"
				+ xFolder
				+ "."
				+ this.ext;
}

exports = module.exports = tiler;