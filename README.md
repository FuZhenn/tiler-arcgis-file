# tiler-arcgis-xyz
[![Circle CI](https://circleci.com/gh/FuZhenn/tiler-arcgis-xyz.svg?style=svg)](https://circleci.com/gh/FuZhenn/tiler-arcgis-xyz)

A map tile reader by XYZ for exploded tiles of ESRI ArcGIS

## Introduction
ArcGIS Exploded Tiles is the tile format used by ArcGIS 9.3.1 and before.

This library is a reader for ArcGIS's exploded tiles.

## See Also
[tiler-xyz](https://github.com/FuZhenn/tiler-xyz):
a nodejs map tile file reader coordinating by X,Y,Z

[tiler-mbtiles](https://github.com/FuZhenn/tiler-mbtiles):
a nodejs map tile reader for mapbox mbtiles format.

[tiler-arcgis-xyz](https://github.com/FuZhenn/tiler-arcgis-xyz):
a nodejs map tile reader for exploded tiles by ESRI ArcGIS

[tiler-arcgis-compact](https://github.com/FuZhenn/tiler-arcgis-compact):
a nodejs map tile reader for compact tiles by ESRI ArcGIS

## Install

```bash
npm install tiler-arcgis-xyz
```

## Usage

```javascript
var Tiler = require('tiler-arcgis-xyz');
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