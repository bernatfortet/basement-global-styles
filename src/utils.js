
export const num = n => typeof n === 'number' && !isNaN(n)
export const parseUnit = n => num(n) ? n + 'px' : n