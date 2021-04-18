export default function deleteFromArray (array: Array<any>, index: number) {
    const tmpArray = [...array];

    tmpArray.splice(index, 1);

    return tmpArray;
}
