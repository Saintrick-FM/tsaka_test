// Get all buttons with the class 'type_course_btn'
const buttons = document.querySelectorAll(".type_course_btn");
const circles = document.querySelectorAll(".circle");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the 'type_course_btn--active' class when the button is clicked
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Add 'type_course_btn--active' class to the clicked button
    button.classList.toggle("active");
  });
});
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    // Toggle the 'type_course_btn--active' class when the button is clicked
    circles.forEach((btn) => btn.classList.remove("active"));
    // Add 'type_course_btn--active' class to the clicked button
    circle.classList.toggle("active");
  });
});
