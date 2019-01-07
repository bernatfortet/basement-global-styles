import { dimensions } from '../lib/quickProps/dimensions'

test('functions', () => {
  expect(typeof dimensions).toBe('function')
})

// test('dimensionProps 1', () => {
//   const p = { 
//     w: 100, h: 100,
//     maxw: 100, minw: 100,
//     maxh: 100, minh: 100
//   }
//   expect(dimensions(p)).toEqual({
//     width: '100px', height: '100px',
//     maxWidth: '100px', minWidth: '100px',
//     maxHeight: '100px', minHeight: '100px',
//   })
// })

// test('dimensionsProps 2', () => {
//   const p = { sz: 100 }
//   expect(dimensions(p)).toEqual({
//     width: '100px', height: '100px', 
//   })
// })

// test('dimensionsProps3', () => {
//   const p = { w: 'auto', h: '100%' }
//   expect(dimensions(p)).toEqual({
//     width: 'auto', height: '100%',
//   })
// })