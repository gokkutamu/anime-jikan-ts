export const resizeImage = (
    imageUrl: string,
    width: string = "original"
): string => `${width}${imageUrl}`;