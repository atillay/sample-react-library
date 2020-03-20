import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import del from 'rollup-plugin-delete';

export default {
	input: 'src/lib.js',
	output: {
		format: 'cjs',
		file: 'dist/lib.js'
	},
	external: [
		'react',
		'react-dom',
	],
	plugins: [
		resolve(),
		babel({exclude: 'node_modules/**'}),
		scss(),
		del({ targets: 'dist/*' }),
	],
	watch: {
		include: 'src/**'
	}
};
