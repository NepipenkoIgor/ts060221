// type TAccount = {
//     readonly firstName: string;
//     readonly age?: number;
//     [id: string]: string | number | undefined;
// };
//
// const user: TAccount = {
//     firstName: 'Ihor',
//     age: 35
// }

/* Object/ Functions*/

type TAccount = {
    readonly firstName: string;
    readonly age?: number;
    [id: string]: string | number | undefined;
};

interface IAccount {
    readonly firstName: string;
    readonly age?: number;

    [id: string]: string | number | undefined;
};

let u: IAccount = {
    firstName: 'Ihor',
    age: 35
};
type SetPoint = (x: number) => void
//
// type SetPoint = { (x: number): void }

interface ISetPoint {
    (x: number): void
}

let fn: SetPoint = (_x: number) => {

}

/**extends**/

type TPointX = {
    x: number;
}
type TPointY = {
    y: number;
}

interface IPointX {
    x: number;
}

interface IPointY {
    y: number;
}

type TPoint = TPointX & IPointY;

interface IPoint extends IPointX, TPointY {

}

let point: IPoint = {
    x: 1,
    y: 1
}

/**implements*/

class Point implements IPointX, TPointY {
    x = 1;
    y = 1;
}


type TAnimation = 'ease-in' | 'ease-out';


// type A = {
//     x: number;
// }
//
// type A = {
//     y: number;
// }


// interface A {
//     x: number;
// }
//
//
// let a: A = {
//     x: 1,
//     y: 1
// }

type Strs = [string, string];
type Numbers = [number, number];


type SSNNB = [...Strs, ...Numbers, boolean];

let a: SSNNB = ['1', '1', 1, 1, true]

// type t = { name: string };
// type y = { age: number };
// type z = t & y;


interface A {
    y: number;
}

interface IUser {
    name: string;
    age?: number;
}

const x: IUser = {name: '123'};
const y: IUser = {name: '123', age: 12};
const z: IUser = {...x, ...y}
