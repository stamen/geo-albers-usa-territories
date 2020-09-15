# geo-albers-usa-territories
A map projection including all US overseas territories.

Original source: https://observablehq.com/@almccon/u-s-map-with-puerto-rico-us-virgin-islands-american-samoa-gua

An extension of https://observablehq.com/@d3/u-s-map-with-puerto-rico

Which in turn was derived from https://github.com/d3/d3-geo/blob/master/src/projection/albersUsa.js

![US Albers w/ Territories map projection screenshot](https://github.com/stamen/us-albers-territories/raw/master/us-albers-territories-screenshot.png)

Note that this package marks `d3-geo` as a `peerDependency`, so you'll need to directly depend on `d3-geo` as well as this package. This is to avoid the possibility of bundling multiple copies of `d3-geo`.
