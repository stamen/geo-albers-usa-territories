export default {
  input: 'src/index.js',
  external: ['d3-geo'],
  output: {
    file: 'dist/geo-albers-usa-territories.js',
    format: 'umd',
    name: 'geoAlbersUsaTerritories',
    globals: {
      'd3-geo': 'd3',
    },
  },
};
