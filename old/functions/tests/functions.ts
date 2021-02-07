export type sn = string | number;

export function isString(arg: string | number): arg is string {
    return typeof arg === 'string';
}

export function average(a: string, b: number): string;
export function average(a: number, s: string): string;
export function average(a: number, b: number, c: number): string;
export function average(...args: (string | number)[]): string {
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
