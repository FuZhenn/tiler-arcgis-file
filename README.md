# tiler-arcgis-file
[![Circle CI](https://circleci.com/gh/fuzhenn/tiler-arcgis-file.svg?style=svg)](https://circleci.com/gh/fuzhenn/tiler-arcgis-file)

A map tile reader by XYZ for exploded tiles of ESRI ArcGIS

## Introduction
ArcGIS Exploded Tiles is the tile format used by ArcGIS 9.3.1 and before.

This library is a reader for ArcGIS's exploded tiles.

## See Also
[tiler-file](https://github.com/FuZhenn/tiler-file):
a nodejs map tile file reader coordinating by X,Y,Z

[tiler-arcgis-bundle](https://github.com/FuZhenn/tiler-arcgis-bundle):
a nodejs map tile reader for compact tiles by ESRI ArcGIS 10.0-10.2

## Install

```bash
npm install tiler-arcgis-file
```

## Usage

```javascript
var Tiler = require('tiler-arcgis-file');
//root folder of the tiles, where the Conf.xml stands
//png is the extension of the tile file, 
var tiler = new Tiler('/home/foo/arcgis_tiles/','png');
//tile's x,y,z
tiler.getTile(3408, 2417, 2, function(error, tile) {
    if (error) {
        throw error;
    }
    console.log(tile.lastModified);
    fs.writeFileSync('foo.png', tile.data);
});
```
