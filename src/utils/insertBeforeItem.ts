export default function insertBeforeItem (array: Array<any>, itemIndex: number, insertedItem: any) {
    const tmpArray = [...array];

    tmpArray.splice(itemIndex, 0, insertedItem);

    return tmpArray;
}