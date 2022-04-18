// libraries
import type { APIGatewayProxyResult } from 'aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';

export function parser(event: APIGatewayProxyEvent): any {
	return 'hello world';
}
