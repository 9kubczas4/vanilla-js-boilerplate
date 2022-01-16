import { ExampleHelper } from "../helpers/example.helper";
import { Example } from "../models/example";

export class ExampleService {
  public getCountOfDaysInAugust(): number {
    const example: Example = {
      message: 'example method from example service'
    };
    console.log(example);
    return ExampleHelper.getCountOfDaysInAugust();
  }
}