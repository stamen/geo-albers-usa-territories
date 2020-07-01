export default {
  input: 'src/index.js',
  external: ['d3-geo'],
  output: {
    file: 'dist/us-albers-territories.js',
    format: 'umd',
    name: 'geoAlbersUsaTerritories',
    globals: {
      'd3-geo': 'd3'
    }
  }
};
