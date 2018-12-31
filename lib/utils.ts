
export const num = (n: any): boolean => typeof n === 'number' && !isNaN(n)
export const parseUnit = (n: number | string) => num(n) ? n + 'px' : n

export const createMediaQuery = (n: number | string) => `@media screen and (min-width: ${parseUnit(n)})`