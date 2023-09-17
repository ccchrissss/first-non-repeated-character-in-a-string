function firstNonRepeated(s) {
  
  let arr = s.split('')

  arr.forEach( (e, i) => {

    console.log(e, arr.indexOf(e), arr.lastIndexOf(e))
    
    if (arr.indexOf() == arr.lastIndexOf(e)) {
      return e
    }
  })

  // return null
}

console.log(firstNonRepeated('hello'))

// parameter: string
// return: string or null   // if all characters are unique, return the first character
// if no characters are unique return null
// e.g. firstNonRepeated('hello')
// results in 'h'


// split the string into an array
// begin forEach loop
// filter the array by current element in loop
// if filtered copy has  length equal to 1 then return element
// if 
