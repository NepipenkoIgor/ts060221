// function fn(_a: any) {
//
// }
//
// let a = fn('1');
// let n = fn({a: 1})

// interface, type, class, fn
// interface IMale { male: boolean }
// interface IAccount<INFO extends IMale, ID = string> {
//     id: ID;
//     firstName: string,
//     info: INFO
// }
//
// let user: IAccount<IMale> = {
//     id: 'asdasd',
//     firstName: 'Ihor',
//     info: {
//         male: true
//     }
// }
//
// let admin: IAccount<IMale & {subjects: string[] }, number> = {
//     id: 12,
//     firstName: 'Vlad',
//     info: {
//         male: true,
//         subjects: ['ts', 'react', 'angular']
//     }
// }
//
// let arr: Array<>

interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface ICartProduct extends IProduct {
    count: number;
}

interface IState {
    user: IUser,
    products: IProduct[],
    cart: ICartProduct[]
}

const state: IState = {
    user: {name: 'Ihor', age: 35},
    products: [{name: 'IPhone XR', price: 50}],
    cart: [{name: 'IPhone XR', price: 50, count: 10}],
}

type Select<T> = <U extends keyof T>(state: T, field: U) => T[U]


const select: Select<IState> = (state, field) => state[field];

const user: IUser = select(state, 'user')
