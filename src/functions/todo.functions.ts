// libraries
import type { AWS } from '@serverless/typescript';
type ASWFunctions = AWS['functions'];

export const todoFunctions: ASWFunctions & any = {
	queryTodo: {
		name: 'query-todo',
		events: [{ http: { method: 'get', path: 'todo', cors: true } }],
		handler: 'build/src/functions/todo.query',
		middleware: {
			pre: ['build/src/functions/middleware/body-parser.parser'],
		},
	},

	getTodo: {
		name: 'get-todo',
		handler: 'build/src/functions/todo.get',
		events: [{ http: { method: 'get', path: 'todo/{id}', cors: true } }],
	},

	createTodo: {
		name: 'create-todo',
		handler: 'build/src/functions/todo.create',
		events: [{ http: { method: 'post', path: 'todo', cors: true } }],
	},

	updateTodo: {
		name: 'update-todo',
		handler: 'build/src/functions/todo.update',
		events: [{ http: { method: 'put', path: 'todo/{id}', cors: true } }],
	},

	removeTodo: {
		name: 'remove-todo',
		handler: 'build/src/functions/todo.remove',
		events: [{ http: { method: 'delete', path: 'todo/{id}', cors: true } }],
	},
};
