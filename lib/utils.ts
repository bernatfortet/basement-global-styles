export const is = (n: any) => n !== undefined && n !== null
export const isNum = (n: any): boolean => typeof n === 'number' && !isNaN(n)
export const parseUnit = (n: number | string) => isNum(n) ? n + 'px' : n
export const isNegative = (n: number) => n < 0

export const createMediaQuery = (n: number | string) => `@media screen and (max-width: ${parseUnit(n)})`

export const defaultBreakpoints = [576, 768, 992, 1200]