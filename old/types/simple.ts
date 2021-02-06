// interface IUserAccount {
//     firstName: string;
//     age: number;
// }
//
// let person = IUserAccount

//
// const userAccount = {
//     firstName: 'Ihor',
//     age: 35
// }
//
// const person: typeof userAccount = {
//     firstName: 'Vlad',
// };
//
// class UserAccount {
// }
//
// let p: UserAccount = new UserAccount();
//
//
// let v = 1;
// v = 's';

let num: number = -1;
num = NaN;
num = 0x0101;

let str: string = 's';
str = `${num}`;


const bool: boolean = true;

const nil: null = null;
const und: undefined = undefined;


const bInt: bigint = 1n;

const key1: unique symbol = Symbol('key1');
const key2 = Symbol('key2');
const key3: symbol = Symbol('key3');

const strictObj = {
    [key1]: 'some value1',
    [key2]: 'some value2',
    [key3]: 'some value3',
}

let p = strictObj[key3];


const arg1 = Symbol('arg1');
const arg2: symbol = Symbol('arg2');

function onlyArg1(_value: typeof arg1): void {

}

onlyArg1(arg1);
onlyArg1(arg2);
