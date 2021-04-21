export default function deleteFromArray<P> (array: Array<P>, index: number) {
    const tmpArray = [...array];

    tmpArray.splice(index, 1);

    return tmpArray;
}
