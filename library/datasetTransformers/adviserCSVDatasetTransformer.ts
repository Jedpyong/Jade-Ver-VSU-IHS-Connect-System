import type { IFile } from "../files/iFile";

import { FileParsers } from "../fileParsers/fileParsers";
import { FailedResult } from "../results/failedResult";
import { Result } from "../results/result";
import { SuccessfulResult } from "../results/successfulResult";
import { Validators } from "../validators/validators";
import { DatasetTransformer } from "./datasetTransformer";

export class AdviserCSVDatasetTransformer extends DatasetTransformer {
  public constructor() {
    super(
      [String, String, String, Number],
      [
        Validators.emailValidator,
        Validators.personNameValidator,
        Validators.passwordValidator,
        Validators.personAgeValidator,
      ]
    );
  }

  public transform(file: IFile): Result {
    try {
      let validationResult: Result = FileParsers.csvFileParser.parseToString(file);
      if (validationResult.isNotSuccessful) {
        throw new Error(validationResult.message);
      }

      let rawParsedData: any[] = validationResult.data.asciiBinaryString.trim().split("\r\n");
      if (rawParsedData.length < 2) {
        throw new Error("File must contain at least 1 adviser");
      }

      let key: any;
      let cellData: any;
      let columns: any[] = rawParsedData[0].split(",");
      const keys: any[] = columns;
      const values: any = {};
      for (let rowIndex: number = 1; rowIndex < rawParsedData.length; ++rowIndex) {
        columns = rawParsedData[rowIndex].split(",");
        key = this._columnTypes[0](columns[0]);
        validationResult = this._columnValidators[0].validate(key);
        if (validationResult.isNotSuccessful) {
          throw new Error(validationResult.message);
        } else if (key in values) {
          throw new Error(`'${key}' at line '${rowIndex + 1}' already exists`);
        } else if (this._columnCount !== columns.length) {
          throw new Error(
            `'${key}' at line '${rowIndex + 1}' must contain exactly '${this._columnCount}' columns`
          );
        }

        columns.shift();
        for (let columnIndex: number = 1; columnIndex < columns.length; ++columnIndex) {
          cellData = this._columnTypes[columnIndex](columns[columnIndex]);
          validationResult = this._columnValidators[columnIndex].validate(cellData);
          if (validationResult.isNotSuccessful) {
            throw new Error(validationResult.message);
          }
        }
        values[key] = columns;
      }
      return new SuccessfulResult({ keys, values });
    } catch (error: any) {
      return new FailedResult(error.message);
    }
  }
}
