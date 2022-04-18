// libraries
import type { AWS } from '@serverless/typescript';

// functions
import { todoFunctions } from '@functions/todo.functions';

const serverlessConfiguration: AWS = {
	service: 'todo-typescript',
	provider: {
		name: 'aws',
		runtime: 'nodejs14.x',
		region: 'eu-north-1',
	},

	functions: {
		...todoFunctions,
	},

	plugins: ['serverless-middleware'],

	package: {
		patterns: ['README.md', '.gitignore', './src/test/**'],
	},
};

module.exports = serverlessConfiguration;
