import { Example } from './../models/example';
export class ExampleHelper {
  public static getCountOfDaysInAugust(): number {
    const example: Example = {
      message: 'example method from example helper'
    };
    console.log(example);
    return 31;
  }
}