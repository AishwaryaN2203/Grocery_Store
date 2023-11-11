/* 
JS function validate form is used with contact us page to validate the user information provided
Validation Applied: 
1. First and last name is alphabetic
2. First and last name have their first letter capital
3. First and last name are not equal
4. Email should contain @ and .
5. Phone number should follow the format 999-999-9999
6. Comments should be atleast 10 characters
*/

function validateForm() {
  var regExpName =  /^[A-Za-z]+$/;
  var regExpPhNo = /^\(\d{3}\) \d{3}-\d{4}$/;

  let firstName = document.forms["formName"]["fname"].value;
  let lastName = document.forms["formName"]["lname"].value;
  let phNo = document.forms["formName"]["phNo"].value;
  let email = document.forms["formName"]["email"].value;
  let comments = document.forms["formName"]["comments"].value;
  if (!firstName) {
    alert("First Name is empty");
  } else if (!(/[A-Z]/.test(firstName))) {
    alert("The First letter of first name should be capital letter");
  } else if (!regExpName.test(firstName)) {
    alert("First Name should have just alphabets");
  }

  if (!lastName) {
    alert("Last Name is empty");
  } else if (!(/[A-Z]/.test(lastName))) {
    alert("The first letter of last name should be capital letter");
  } else if (!regExpName.test(lastName)) {
    alert("Last Name should have just alphabets");
  }

  if (firstName & firstName == lastName) {
    alert("The first and the last name are same");
  }

  if (!regExpPhNo.test(phNo)) {
    alert("The phone number is not in (ddd)-ddd-dddd format");
  }
  if (
    !(
      document.querySelector('input[name="gender"][value="male"]').checked ||
      document.querySelector('input[name="gender"][value="female"]').checked
    )
  ) {
    alert("The gender is not selected");
  }

  if (!email) {
    alert("Email is empty");
  } else if (!email.includes("@")) {
    alert("The email does not have @");
  } else if (!email.includes(".")) {
    alert("The email does not have .");
  }

  if (comments.length < 10) {
    alert("Comments should atleast have 10 characters");
  }
  alert("Your information is accepted !!!!");
}
