# tiler-arcgis-xyz
[![Circle CI](https://circleci.com/gh/FuZhenn/tiler-arcgis-xyz.svg?style=svg)](https://circleci.com/gh/FuZhenn/tiler-arcgis-xyz)
A map tile reader by XYZ for exploded tiles of ESRI ArcGIS

## Introduction
ArcGIS Exploded Tiles is the tile format used by ArcGIS 9.3.1 and before.

This library is a reader for ArcGIS's exploded tiles.


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