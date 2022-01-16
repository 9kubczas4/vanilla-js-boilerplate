import './assets/styles/styles.scss';
import { ExampleService } from "./app/services/example.service";

const buttonElement: HTMLButtonElement = document.getElementById('change-btn') as HTMLButtonElement;
const heading: HTMLHeadingElement = document.getElementById('heading') as HTMLHeadingElement;
const exampleService: ExampleService = new ExampleService();

buttonElement.addEventListener('click', () => {
  heading.textContent = `${exampleService.getCountOfDaysInAugust()}`;
});