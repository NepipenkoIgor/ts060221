function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function* getItemsReallySlowly(items: Iterable<string>): AsyncIterableIterator<string> {
    for (const item of items) {
        await sleep(1000);
        yield  item;
    }
}

export async function speakLikeSloth5(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}
