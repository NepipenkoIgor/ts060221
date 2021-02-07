type NotReadonlyAndOptional<T> = {
    -readonly [P in keyof T]?: T[P]
}
type User = {
    readonly firstName: string;
    readonly age: number;
    info: { male: boolean },
    subject: string[]
}

let nu: NotReadonlyAndOptional<User> = {
    age: 35
}
nu.age = 21;
// P -> a | b  -> Obj['a'] = number

//   Obj['b'] =  string


type RemoveByType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T]


const p: RemoveByType<User, { male: boolean }> = 'subject'; // firstName |  age | subject


type CapitalizedKeysAndGetter<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

let getUser: CapitalizedKeysAndGetter<User> = {
    getFirstName: () => 'Ihor',
    getAge: () => 35,
    getInfo: () => ({male: true}),
    getSubject: () => ['TS', 'JS']
}


type RemoveFieldOptional<T, E> = {
    [K in keyof T as Exclude<K, E>]?: T[K]
}

type RemoveField<T, E> = {
    readonly [K in keyof T as Exclude<K, E>]?: T[K]
}
type PartialOpt<T, U, C> = RemoveFieldOptional<T, U> & RemoveField<T, C>
const u1: PartialOpt<User, 'firstName' | 'subject', 'info' | 'age'> = {
    firstName: 'Ihor',
    subject: ['TS'],
}


type SomeType<T> = T extends Array<infer U> ? SomeType<U> : T;

function deepFlatten<T extends readonly unknown[]>(_x: T): SomeType<T>[] {
    throw 'not implemented'
}

const arr1: number[] = deepFlatten([1, 2, 3]);
const arr2: number[] = deepFlatten([[1], [2, 3]]);
const arr3: number[] = deepFlatten([[1, [3, 3]], [2, 3]]);
