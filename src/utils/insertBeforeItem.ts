export default function insertBeforeItem<P> (array: Array<P>, itemIndex: number, insertedItem: P) {
    const tmpArray = [...array];

    tmpArray.splice(itemIndex, 0, insertedItem);

    return tmpArray;
}