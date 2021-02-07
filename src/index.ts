interface IX {
    x: number;
}

interface IY {
    y: number;
}

class BasePoint implements IX {

    #p: number = 1;

    public constructor(
        public  x: number,
        protected readonly y: number,
        private readonly z: number,
    ) {
    }

    public sum() {
        return this.x + this.y + this.z + this.#p;
    }

}


class Singleton {
    private static instance: Singleton

    private constructor() {
    }

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}


const inst = Singleton.getInstance();
const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();

console.log(inst === inst3)

type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['TS', 'JS'];
    }
}


class Point extends Tagged(Timestamped(BasePoint)) {
    constructor(x: number,
                y: number,
                z: number,) {
        super(x, y, z);
    }
}


let p = new Point(1, 1, 1);


abstract class AbstractControl<Model> {
    public abstract model: Model;

    public abstract getValue(): Model;

    public onFocus() {

    }

    public onBlur() {

    }
}

abstract class AbstractControlWithSet<T> extends AbstractControl<T> {
    public abstract setValue(v: T): void;
}

interface IDropDownItem {
    text: string;
    value: string;
}

class MHDropDown extends AbstractControlWithSet<IDropDownItem[]> {
    public model: IDropDownItem[] = [];

    public getValue(): IDropDownItem[] {
        return this.model;
    }

    public setValue(v: IDropDownItem[]) {
        this.model = v;
    }
}

class MHInput extends AbstractControlWithSet<string> {
    public model: string = ''

    public getValue(): string {
        return this.model;
    }

    public setValue(v: string) {
        this.model = v;
    }
}


const dropDownElement = new MHDropDown()
