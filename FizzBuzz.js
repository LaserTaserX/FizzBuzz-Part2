// TODO: Define constants for the form and the result display area
const form = document.getElementById('submitBtn');
const result = document.getElementById('result');
const numberInput = document.getElementById('numberInput');
// TODO: Add the first line of the event listener to handle form submission

form.addEventListener('click', function(event) {
    // TODO: Get the number from the form input
    let number = Number(numberInput.value);
    
    // TODO: Write FizzBuzz logic here
    // If divisible by both 3 and 5, set the output to "FizzBuzz"
    // If divisible by 3, set the output to "Fizz"
    // If divisible by 5, set the output to "Buzz"
    // Otherwise, set the output to the number itself
    let output = number;
    if (number % 15 == 0) {
        output = "FizzBuzz";
    } else if (number % 3 == 0) {
        output = "Fizz";
    } else if (number % 5 == 0) {
        output = "Buzz";
    }

    // Display the result on the page
    result.textContent = output;
})
