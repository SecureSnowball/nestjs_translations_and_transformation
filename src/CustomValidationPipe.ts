import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

export default class CustomValidationPipe extends ValidationPipe {
  constructor(options: ValidationPipeOptions = {}) {
    options.errorHttpStatusCode = 422;
    super(options);
  }
}
