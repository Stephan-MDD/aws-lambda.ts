// libraries
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class TodoDto {
	@IsDefined()
	@Expose()
	title!: String;

	@IsDefined()
	@Expose()
	description!: String;
}
