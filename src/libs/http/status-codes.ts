export enum HttpStatusCodes {
	// successful (200–299)
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NO_CONTENT = 204,

	// client error  (400–499)
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWED = 405,

	// server error  (500–599)
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
}
