// function checkAge() {
//     * Get user input values
//     const nameInput = document.getElementById('nameInput').value;
//     const ageInput = document.getElementById('ageInput').value;

//    * Validate if inputs are not empty
//     if (nameInput.trim() === '' || ageInput.trim() === '') {
//       alert('Please enter both your name and age.');
//       return;
//     }

//     * Convert ageInput to a number
//     const age = parseInt(ageInput);

//     * Determine age category
//     let ageCategory;
//     if (age < 13) {
//       ageCategory = 'Child';
//     } else if (age >= 13 && age < 18) {
//       ageCategory = 'Teenager';
//     } else {
//       ageCategory = 'Adult';
//     }

//     * Display personalized greeting and age category
//     const resultElement = document.getElementById('result');
//     resultElement.innerHTML = `Hello, ${nameInput}! You are ${age} years old. You are a ${ageCategory}.`;
//   }


function checkAge() {
    // Get Userinput Value
    const nameInput = document.getElementById('nameInput').value;
    const ageInput = document.getElementById('ageInput').value;


    // Validate if input are not empty
    if (nameInput.trim() === '' || ageInput.trim() === '') {
        alert("Please enter both your name and age.");
        return;
    }


    // Check if name is a string
    let name = parseInt(nameInput, 10);
    // console.log(typeof name)
    // console.log(isNaN(name));
    if (typeof nameInput !== 'string' || isNaN(name) === false) {
        alert('Please enter a valid name.');
        return;
    }


//     * Check if age is a number
    // let ageNumber = parseInt(ageInput, 10); // Convert ageInput to a number
    // if (isNaN(ageNumber)) {
    //     alert('Please enter a valid age.');
    //     return;
    // }

  // Validate if the input is a numeric value
  if (!/^[0-9]*$/.test(ageInput)) {
    alert('Please enter a valid numeric value.');
    return;
  }



    // Convert ageInput to a number
    const age = parseInt(ageInput);
  

    // Determine age category
    let ageCategory;
    if (age < 13) ageCategory = 'Child';
    else if (age >= 13 && age < 18) ageCategory = 'Teenager';
    else ageCategory = 'Adult';


    // Display personalized greeting and age category
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Hello, ${nameInput}! You are ${age} years old. You are a ${ageCategory}.`;



}