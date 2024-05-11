import { ValidationError } from 'class-validator';

export interface RegisterData {
  name: string,
  age: number,
  married: string,
  date_of_birth: Date,
}

interface BaseResponseInteface {
  success: boolean;
  data?: any;
  errors?: ValidationError[];
}

interface RegisterResponseSuccess extends BaseResponseInteface {
  success: true;
  data: RegisterData;
}

interface RegisterResponseError extends BaseResponseInteface {
  success: false;
  errors: ValidationError[];
}

export type RegisterResponse = RegisterResponseSuccess | RegisterResponseError;