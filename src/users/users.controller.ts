import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegisterData, RegisterResponse } from "./interfaces/user_interfaces";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Post('/register')
    register(@Body() registerData: RegisterData): Promise<RegisterResponse> {
        return this.usersService.validateUser(registerData);
        // return {
        //     success: true,
        //     data: registerData
        // };
    }

}
