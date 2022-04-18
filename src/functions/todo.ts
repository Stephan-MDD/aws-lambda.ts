// libraries
import type { APIGatewayProxyResult } from 'aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import type { APIGatewayProxyEventPathParameters } from 'aws-lambda';
import type { APIGatewayProxyEventQueryStringParameters } from 'aws-lambda';

// resources
import { badRequestResponse, createdResponse, noContentResponse, okResponse } from '../libs/http/response-factory';
import { classMapper } from '../libs/mappers/class-mapper';
import { TodoDto } from '../libs/models/todo';

type KeyValuePair = Record<string | number | symbol, unknown>;

export async function query(event: APIGatewayProxyEvent, context: any): Promise<APIGatewayProxyResult> {
	console.log(context);

	const query: APIGatewayProxyEventQueryStringParameters | null = event.queryStringParameters;

	if (query === undefined || query === null) {
		const response: APIGatewayProxyResult = badRequestResponse();
		return response;
	}

	const todoDto: TodoDto | null = await classMapper(TodoDto, Object.create(query));

	if (todoDto === null) {
		const response: APIGatewayProxyResult = badRequestResponse();
		return response;
	}

	const response: APIGatewayProxyResult = okResponse(todoDto);
	return response;
}

export async function get(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const body: KeyValuePair = { message: 'hello get', params };
	const response: APIGatewayProxyResult = okResponse(body);
	return response;
}

export async function create(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const contentType: string | undefined = event.headers['content-type'];

	if (event.body === null || contentType !== 'application/json') {
		const response: APIGatewayProxyResult = badRequestResponse();
		return response;
	}

	const body: KeyValuePair = JSON.parse(event.body);
	const todoDto: TodoDto | null = await classMapper(TodoDto, body);

	if (todoDto === null) {
		const response: APIGatewayProxyResult = badRequestResponse();
		return response;
	}

	const response: APIGatewayProxyResult = createdResponse({});
	return response;
}

export async function update(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const contentType: string | undefined = event.headers['content-type'];

	if (event.body === null || contentType !== 'application/json') {
		const response: APIGatewayProxyResult = badRequestResponse();
		return response;
	}

	const body: KeyValuePair = JSON.parse(event.body);
	const todoDto: TodoDto | null = await classMapper(TodoDto, body);

	if (todoDto === null) {
		const response: APIGatewayProxyResult = badRequestResponse();
		return response;
	}

	const response: APIGatewayProxyResult = noContentResponse();
	return response;
}

export async function remove(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const params: APIGatewayProxyEventPathParameters | null = event.pathParameters;
	const response: APIGatewayProxyResult = noContentResponse();
	return response;
}
