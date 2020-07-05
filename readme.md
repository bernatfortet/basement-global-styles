## Terminology
- styleName => referrs to Style Property names width, height, color, fontSize, etc...
- propKey => Referrs to the JSX property that gets passed down. w, h, sz, fs, bg
- propKey can return a keyArray like sz => [w, h]
- propValues can be of:
    - type number w={200}
    - type string h='auto'
    - type array maxw={[200, 500]}
    - type object fs={{ sm:200, lg: 400 }}


## Thoughts
// size sets width: 200, height 200,
// w: overrides width with media queries?

// media queries
// start with large in web  or start with smallest up to 578?
// the most common way of defining responsivness stuff is to start with the samllest size, mobile
// but I still want to define web
// 2 ways to go about it
// w={100} = default / no media query / xlg
// w={[200, 400]} sm, and md sizes
// I think overrides are nice
// w={[200, 400]} => first is default, afterwards it starts from the bottom?

/*

given sz:200, w={50} w:[100, 200]
 For that i need is to parse each prop
 sz is keyArray gives me 
 
 
 {width: 200px }
 {height: 200px }

  NEXT
  w is value array
  { width: 50 }
  { media-query:...: {
      width:100px
  }}
  { media-query:...: {
      width:200px
  }}
  { media-query:...: {
      maxHeight:100px
  }}
  { media-query:...: {
      maxHeight:200px
  }}

  media queries will be combined, inside objects will merged


*/