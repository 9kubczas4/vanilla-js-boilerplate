import { ExampleService } from './../app/services/example.service';
import { expect } from "chai";

describe('Example tests', () => {
  it('August should have 31 days', () => {
    const exampleService: ExampleService = new ExampleService();
    const result = exampleService.getCountOfDaysInAugust();
    expect(result).to.equal(31);
  });
});