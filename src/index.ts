import { CheckTypeInRuntime, Debounce, LogInputValue, SavePersistence } from './decorators';
import { RangeLimit, Validate } from "./utils";

class SearchComponent {

    @CheckTypeInRuntime
    @SavePersistence
    public initialValue!: string;

    public constructor(
        private readonly inputElement: HTMLInputElement
    ) {
        this.inputElement.addEventListener('input', this.onSearch.bind(this))
        console.log('send to server', this.initialValue)
    }

    @Debounce(300)
    @LogInputValue
    private onSearch(_e: Event): void {
        this.initialValue = (_e.target as HTMLInputElement).value;
    }
}

const inputElement = document.querySelector('input') as HTMLInputElement;
const searchWidget = new SearchComponent(inputElement);

setTimeout(() => {
    (searchWidget.initialValue as any) = 1;
}, 5000)


class Calculator {
    public updatePercentage(
        oldValue: number,
        @RangeLimit(30, 70) newValue: number
    ) {
        console.log(oldValue, newValue)
    }
}

const calc = new Calculator();
calc.updatePercentage(20, 40);
setTimeout(() => {
    calc.updatePercentage(20, 80);
}, 5000)
