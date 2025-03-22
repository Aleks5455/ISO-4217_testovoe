import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  currencyIds: number[];
}
