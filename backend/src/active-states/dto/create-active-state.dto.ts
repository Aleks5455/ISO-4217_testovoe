import { IsArray, IsString, IsOptional } from 'class-validator';

export class CreateActiveStateDto {
  @IsString()
  @IsOptional()
  userId?: string;

  @IsArray()
  activeCountries: string[];

  @IsArray()
  activeCurrencies: string[];
}
