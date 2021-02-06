const user: {
    readonly firstName: string;
    readonly age?: number;
    [id: string]: string | number | undefined;
} = {
    firstName: 'Ihor',
    age: 35
}
//
// user.age = 21;
//
// let keys: keyof typeof user = 'firstName';
//
// let hashUserMap: {
//     [id: string]: typeof user
// }
//
// let users: typeof hashUserMap = {
//     'a12312asdasda': user,
//     'a1231asd123': user,
//     'asda124af': user,
//     '1231zxvasda': user,
// }
//
// let a: Map<string, typeof user> = new Map<string, typeof user>()


// let arr: readonly {
//     readonly firstName: string;
//     readonly age?: number;
//     [id: string]: string | number | undefined;
// }[] = [user];
//
// arr[100] = 1;
// arr.push(1);
//
// let tupleArr: [id: string, account: typeof user] = ['123sdasda1241', user];
//
// tupleArr[100] = user;
// tupleArr.push(user);

// let a = 'Ihor';
// let myName: typeof a = 'Vlad';

const  x = 10 as const;

let arr = [1, 2, 3]
const acc = {firstName: 'Ihor', content: [1, 2, 3]} as const;

acc.firstName = 'vlad';
acc.content = [];
acc.content.push(1);
