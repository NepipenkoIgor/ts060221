// 1) assert https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
// 2) https://www.freecodecamp.org/news/typescript-curry-ramda-types-f747e99744ab/
// 3) Есть всеми известная функция compose. сколько не пытался и не искал не нашёл нормальную типизацию. Пока не понял, ts не настолько сильный чтобы элегантно типизировать.
// 4) Как типизировать. (Alexander)
const convert = (obj, callback) => Object.entries(obj).reduce((res, [key, config]) => ({
   ...res,
   [key]: callback(config),
}), {});

//как решение но оно не особо верное

type ConvertType = <TObject, Key extends keyof TObject, Result>(
    obj: TObject,
    callback: (config: TObject[Key]) => Result
) => {
   [key in Key]: Result;
};

const convert: ConvertType = (obj, callback) =>
    Object.entries(obj).reduce(
        (res, [key, config]) => ({
           ...res,
           [key]: callback(config),
        }),
        {} as any
    );

const res = convert(
    {
       label: {
          n: 1,
       },
       asda: {
          dsda: "sadas",
       },
    },
    (config) => ({
       ...config,
       a: 2,
       sas: "123",
    })
);

console.log(res);

// на выходе должно быть
//
// {
//    label: { n: 1, a: 2, sas: '123' },
//    asda: { dsda: 'sadas', a: 2, sas: '123' }
// }
// ПОКА ЭТО ВСТАВЛЯЛ ПРИШЛО РЕШЕНИЕ В ГОЛОВУ не совсем конечное. если будет интересно завтра расскажу

