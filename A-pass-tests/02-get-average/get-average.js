// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let sum = 0;
    numbers = numbers.filter((number) =>{
      if (typeof number == "number") {
      return true;
      }   
    })

    for (let i = 0; i < numbers.length; i++){
        if(typeof numbers[i] == ("number") ) {
            sum += numbers[i]
        }
    }
    return sum/numbers.length

}
console.log(average([1,2,3,"Ansu"]));

module.exports = average;
