function lexicographicallySubstring(arr) {
  var getString = isString(arr)
  var getSubStr = subStr(getString)
  for (let i = 0; i <= getString.length; i++) {
    index = getString[i]
    if (i >= getString.length) {
      index = 'S'
    }

    console.log(index + ' = {' + getSubStr[i].join('","') + '"}')
  }
}

function isString(arr) {
  const selectedString = []
  for (const index of arr) {
    if (index.match(/[a-zA-Z]+/g) !== null) {
      selectedString.push(index)
    }
  }

  return selectedString;
}

function subStr(arr) {
  const parent = []
  const child = []
  for (const string of arr) {
    const temp = []
    let front = 0
    let back = 1
    for (let i = 1; i <= string.length + string.length-1; i++) {
      temp.push(string.substring(front, back))
      parent.push(string.substring(front, back))
      back++
      if (back >= string.length) back = string.length
      if (back >= string.length && temp.length >= string.length) front++
    }
    child.push(temp)
  }

  return  child.concat([parent])
}

const arr = ['11','12','cii','001','2','1998','7','89','iia','fii','abcdefgh']
const run = lexicographicallySubstring(arr)