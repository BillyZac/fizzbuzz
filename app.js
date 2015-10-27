// Iterate through the numbers 1 to 30
// Multiples of 3 print "Fizz" instead of the number
// Multiples of 5 print "Buzz" instead of the number
// Multiples of both 3 and 5 print "FizzBuzz" instead of the number
// Else print the number
// It should output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz

for (var i=1; i<=30; i++) {
  if (i%15 === 0) {
    console.log("FizzBuzz")
  }
  if (i%3 === 0) {
    console.log("Fizz")
  }
  else if (i%5 === 0) {
    console.log("Buzz")
  }
  else  {
    console.log(i)
  }
}

function print(output) {
  document.write('<div>' + output + '</div>')
}
print("hey!")
