const bookingLocal = JSON.parse(localStorage.getItem("bookings")) || [];

document.querySelector(".bookingBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const reserveDate = document.querySelector(".reserve-date").value;
  const reserveTime = document.querySelector(".reserve-time").value;

  const newBooking = {
    name: name,
    email: email,
    reserveDate: reserveDate,
    reserveTime: reserveTime,
    bookingDateTime: new Date().toLocaleString("vi-VN") // thời điểm đặt bàn
  };

  // Clear form fields
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".reserve-date").value = "";
  document.querySelector(".reserve-time").value = "";

  bookingLocal.push(newBooking);
  localStorage.setItem("bookings", JSON.stringify(bookingLocal));

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Đặt bàn thành công !!",
    showConfirmButton: false,
    timer: 1500
  });
});
const emailSignUpLocal = JSON.parse(localStorage.getItem("emails")) || [];
document.querySelector(".signUp").addEventListener("click", function () {
  const newEmail = document.querySelector(".signUpEmail").value;
  emailSignUpLocal.push(newEmail);
  localStorage.setItem("emails", JSON.stringify(emailSignUpLocal));
});