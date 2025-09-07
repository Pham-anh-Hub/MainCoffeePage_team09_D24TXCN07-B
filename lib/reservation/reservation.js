const bookingLocal = JSON.parse(localStorage.getItem("bookings")) || [];
document.querySelector(".bookingBtn").addEventListener("click", function () {
  const newBooking = {
    name: document.querySelector(".name").value,
    email: document.querySelector(".email").value,
    date: document.querySelector(".date").value,
    time: document.querySelector(".time").value,
  };
  bookingLocal.push(newBooking);
  localStorage.setItem("bookings", JSON.stringify(bookingLocal));
});
const emailSignUpLocal = JSON.parse(localStorage.getItem("emails")) || [];
document.querySelector(".signUp").addEventListener("click", function(){
    const newEmail = document.querySelector(".signUpEmail").value;
    emailSignUpLocal.push(newEmail);
    localStorage.setItem("emails", JSON.stringify(emailSignUpLocal));
})