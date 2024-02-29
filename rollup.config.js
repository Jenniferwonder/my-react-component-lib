// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
// import babel from "@rollup/plugin-babel";
// import { terser } from "rollup-plugin-terser";

// commonjs syntax
// const packageJson = require("./package.json");

export default [
	// Generate JavaScript bundle
	{
		input: "src/index.ts",
		output: [
			{
				// file: packageJson.main,
				file: "dist/cjs/index.js",
				format: "cjs",
				sourcemap: true,
			},
			{
				// file: packageJson.module,
				file: "dist/esm/index.js",
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			postcss(),
		],
	},
	// Generate TypeScript declaration file
	{
		// input: "dist/esm/types/index.d.ts",
		input: "dist/esm/index.d.ts", // Entry point of your ts code
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
		external: [/\.css$/], // To ignore .css files
	},
];

/* export default {
	input: "lib/index.js", // Entry point of your library
	output: {
		file: "dist/bundle.js", // Output file
		format: "umd", // Universal Module Definition (UMD) format
		name: "first-react-component-lib", // Name of your library
		globals: {
			react: "React", // Provide global variable 'React' for React
			"react-dom": "ReactDOM", // Provide global variable 'ReactDOM' for ReactDOM
		},
	},
	plugins: [
		nodeResolve(), // Resolve Node.js modules
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env", "@babel/preset-react"], // Transpile to ES5 and JSX
		}),
		terser(), // Minify the output
	],
}; */
