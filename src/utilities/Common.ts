export function getRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createFilledArray<T>(length: number, element: T): T[] {
    return Array.from({ length }, () => element);
}

export function createFilledArrayWithFunction<T>(length: number, genFunction: () => T): T[] {
    return Array.from({ length }, (): T => genFunction());
}

export function convertNewLinesToBreaks(text: string) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br />\n');
}