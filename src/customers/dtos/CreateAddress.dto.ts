import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  line1: string;

  line2?: string;

  @IsNotEmpty()
  @IsNumber()
  zip: number;

  @IsNotEmpty()
  @IsString()
  city: string;
}
