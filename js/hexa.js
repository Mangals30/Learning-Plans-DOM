const hexaDecimalColor = () => {
  let chars = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']
  let id = '#'
  let len = chars.length
  for (let i = 0; i < 6; i++) {
    let ind = Math.floor(Math.random() * len)
    id += chars[ind]
  }
  return id
}