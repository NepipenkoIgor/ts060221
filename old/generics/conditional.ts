// T extends U ? X: Y;
type noUndefined<T> = T extends undefined | string ? never : T;
type snu = number | undefined | string
const v: noUndefined<snu> = true;

// First element in tuple arr and return value
interface IUser {
    firstName: string;
    age: number;
}

const arr: [() => IUser, () => number, () => void];


type FirstElReturnType<T> =
    T extends [infer U, ...unknown[]]
        ? U extends (...args: any[]) => infer R
        ? R
        : never
        : never;

let v2: FirstElReturnType<typeof arr> = 1;

let v3: Exclude<any, any>

type NonFunction<T> = T extends Function ? never : T;
type FnParamsAndReturnValue<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R   // string | IUser | number
    : never;
/*
[string, IUser] => Args[length |  pop | push, ...]  =>  number  | fn | fn
 */
function fn(_a: string, _b: IUser): number {  // string |  IUser |  number
    return 1;
}

const v4: FnParamsAndReturnValue<typeof fn> = true

let a: Parameters<typeof fn> = 1;






