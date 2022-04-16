// libraries
import type { AWS } from '@serverless/typescript';
type ASWFunctions = AWS['functions'];

export const todoFunctions: ASWFunctions = {
	queryTodo: {
		name: 'query-todo',
		handler: 'build/src/functions/todo.handlers.query',
		events: [{ http: { method: 'get', path: 'todo', cors: true } }],
	},

	getTodo: {
		name: 'get-todo',
		handler: 'build/src/functions/todo.handlers.get',
		events: [{ http: { method: 'get', path: 'todo/{id}', cors: true } }],
	},

	createTodo: {
		name: 'create-todo',
		handler: 'build/src/functions/todo.handlers.create',
		events: [{ http: { method: 'post', path: 'todo', cors: true } }],
	},

	updateTodo: {
		name: 'update-todo',
		handler: 'build/src/functions/todo.handlers.update',
		events: [{ http: { method: 'put', path: 'todo/{id}', cors: true } }],
	},

	removeTodo: {
		name: 'remove-todo',
		handler: 'build/src/functions/todo.handlers.remove',
		events: [{ http: { method: 'delete', path: 'todo/{id}', cors: true } }],
	},
};
