# Calculator

Project to create Calculator using only HTML, CSS and Vanilla JS

**🔗 Live preview:** https://crystaltai.github.io/calculator/

## Built with

### Technologies

- HTML
- CSS
- JS

### Tools

- Visual Studio Code
- Git and GitHub

### Third party code

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

## Summary

### What I learned

- Used loop to add event listeners to all buttons of a certain class
- Used an object to hold the user's inputs (first number, second number, operator) so that code is organized in a more succinct way (versus floating variables); the same method was used to organize the operator methods as well
- The biggest learning takeaway was understanding the current state of the calculator. For example, if it was currently waiting for user to input the first number (vs the second number).
  - This impacts the calculator logic, so it doesn't allow the calculator to run without all required inputs
  - This also impacts the calculator display to ensure it is reset (cleared) for each input number

### Project Summary

3/6/22

- Basic calculator that allows for the following operators (add, minus, multiply, divide)
- Formula display is updated at the top of calculator to show the user's inputs
- User is also able to delete number inputs
- Decimal input is also allowed
