import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'isValidDateOfBirth', async: false })
export class IsValidDateOfBirth implements ValidatorConstraintInterface {
  validate(dateOfBirth: Date, args: ValidationArguments) {
    const age = args.object['age'] as number | null;

    if (!dateOfBirth || !age) {
      return false;
    }

    // Extract year from the provided date of birth
    const providedYear = new Date(dateOfBirth).getFullYear();

    // Calculate the expected year of birth based on the provided age
    const expectedYear = new Date().getFullYear() - age - 1;

    console.log("IsValidDateOfBirth", providedYear, expectedYear);

    // Validate if the year of birth matches the calculated year based on the provided age
    return providedYear === expectedYear;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Date of birth must be coherent with the provided age.';
  }
}