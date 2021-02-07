// function average(a: number, b: number, c: number): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// const v = average('2', 1);
// const v1 = average(1, 1);
// const v2: string = average(1, 1, 1);


// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// const v = average('2', 1);
// const v1 = average(1);
// const v3 = average(1,2);
// const v2: string = average(1, 1, 1);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// const v = average('2', 1);
// const v1 = average(1);
// const v3 = average(1,2);
// const v2: string = average(1, 1, 1);

function isString(arg: string | number): arg is string {
    if (typeof arg === 'string') {
        return true;
    }
    return false;
}
type sn = string | number;
function average(a: string , b: number): string;
function average(a: number, s: string): string;
function average(a: number, b: number, c: number): string;
function average(...args: (string | number)[]): string {
    let total = 0;
    for (const arg of args) {
        if (isString(arg)) {// string | number
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg = total / args.length;
    return `Average is ${avg}`;
}

const v = average('2', 1);
const v0 = average(1, 1);
const v1 = average(1);
const v3 = average(1, 2);
const v2: string = average(1, 1, 1);
const v5: string = average(1, 1, 1, 1, 2);

// const arr: (string | number)[] = [1, '2', 2, '4'];
// arr.filter((el: string | number): el is number => {
//     return typeof el === 'number';
// }).forEach((el) => {
//     el.
// })
//
// function isNumber(el: string | number): el is number {
//     return typeof el === 'number';
// }
//
//
// let action: SomeAction1 | SomeAction2

function getFullName(this: {name: string, surname: string}, age: number = 20, ..._args: number[]) {
    return `${this.name} ${this.surname} ${age.toFixed()}`;
}


let account = {
    name: 'Ihor',
    surname: 'Nepipenko',
    getFullName
}

account.getFullName();
