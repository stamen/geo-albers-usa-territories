import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/geo-albers-usa-territories.js',
    format: 'umd',
    name: 'geoAlbersUsaTerritories',
  },
  //  external: ['d3-geo', 'd3-geo/src/fit.js'],
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
