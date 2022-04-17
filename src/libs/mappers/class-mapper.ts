// libraries
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export async function classMapper<T>(classConstructor: ClassConstructor<T>, body: Record<string, unknown>): Promise<T> {
	const todoDto: any = plainToClass(classConstructor, body, { strategy: 'excludeAll' });
	const validationErrors: ValidationError[] = await validate(todoDto);

	if (validationErrors.length !== 0) {
		throw new Error(); // http error
	}

	return todoDto;
}
