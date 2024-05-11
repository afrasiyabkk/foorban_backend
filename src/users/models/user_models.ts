import { RegisterData } from "../interfaces/user_interfaces";
import { 
    IsNotEmpty, IsString, MinLength, 
    MaxLength, IsInt, Min, Max, ValidateIf,
    Validate
} from 'class-validator';
import { IsValidDateOfBirth } from './IsValidDateOfBirth';

export class registerDataModel implements RegisterData {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(150)
    age: number | null;

    @ValidateIf(o => o.age && o.age > 18)
    @IsNotEmpty()
    married: string;

    @IsNotEmpty()
    @Validate(IsValidDateOfBirth)
    date_of_birth: Date;
}