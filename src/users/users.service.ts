import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { RegisterData, RegisterResponse } from "./interfaces/user_interfaces";
import { registerDataModel } from "./models/user_models";

@Injectable()
export class UsersService {
    async validateUser(registerData: RegisterData): Promise<RegisterResponse> {
        const data = plainToClass(registerDataModel, registerData) as RegisterData;
        const validationErrors = await validate(data);

        if (validationErrors.length > 0) {
            return {
                success: false,
                errors: validationErrors,
            };
        }
        return {
            success: true,
            data: registerData,
        };
    }
}
