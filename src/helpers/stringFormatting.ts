// Capitalise first letter of string
export const capitaliseFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get last part of string after "/"
export const getLastPartOfString = (string: string,char:string) => {
    return string.split(char).pop()  || ""
}