// let d: 1 | 2 | 3 ;

type TAnimation = 'ease';
type Direction = 'in' | 'out';

enum AnimationEnum {
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out',
}

let a: keyof (typeof AnimationEnum) = 's'

interface IAnimationOptions {
    delay: number;
    type: AnimationEnum;
}

function animate(_options: IAnimationOptions) {
    // ease-in , ease-out
}

animate({delay: 1000, type: AnimationEnum.EASE_IN})


type IFact = {
    factId: number;
    useFrom: string;
}

const a: IFact[keyof IFact] = true

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact => { // 'factId' |  'useFrom'
    return 'factId'
}

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {
        //....
    }
    return item;
})
