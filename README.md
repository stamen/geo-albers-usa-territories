# geo-albers-usa-territories
A map projection including all US overseas territories.

## How to use?

If you're using a `<script>` tag to pull in the library, be sure to use the distribution bundle, for example using a Content Distribution Netowork such as Unpkg like this:

```html
<script src="https://unpkg.com/geo-albers-usa-territories@0.1.0/dist/geo-albers-usa-territories.js"></script>
```

Otherwise, you can use it as a dependency with NPM (`npm install geo-albers-usa-territories`) and `require` it like this:

```js
const geoAlbersUsaTerritories = require("geo-albers-usa-territories")
```

Or, if your environment suppots ES6 modules:

```js
import geoAlbersUsaTerritories from "geo-albers-usa-territories";
```

Here's a [complete working example that uses this library](https://vizhub.com/curran/06639ba4d76d4cf08e69f4f42a0c9a99).

## Where did this come from?

Original source: https://observablehq.com/@almccon/u-s-map-with-puerto-rico-us-virgin-islands-american-samoa-gua

An extension of https://observablehq.com/@d3/u-s-map-with-puerto-rico

Which in turn was derived from https://github.com/d3/d3-geo/blob/master/src/projection/albersUsa.js

![US Albers w/ Territories map projection screenshot](https://github.com/stamen/us-albers-territories/raw/master/us-albers-territories-screenshot.png)

Note that this package marks `d3-geo` as a `peerDependency`, so you'll need to directly depend on `d3-geo` as well as this package. This is to avoid the possibility of bundling multiple copies of `d3-geo`.
