import validator from 'validator';

import { Validator } from "./validator";
import { Result } from "../results/result";
import { FailedResult } from '../results/failedResult';
import { SuccessfulResult } from "../results/successfulResult";

export class FloatValidator extends Validator {
  public validate(value: any): Result {
    return (validator.isFloat(value)) ?
      new SuccessfulResult(value) :
      new FailedResult(`'${value}' is not a float`);
  }
}
