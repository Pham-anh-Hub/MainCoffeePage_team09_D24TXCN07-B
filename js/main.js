const accountLocal = JSON.parse(localStorage.getItem("accounts")) || [];
// Chờ khi trang web tải xong
document.addEventListener("DOMContentLoaded", function () {
    // 1. Dropdown menu (chỉ hoạt động khi màn hình rộng > 992px)
    function setupDropdown() {
        let dropdowns = document.querySelectorAll(".navbar .dropdown");
        if (window.innerWidth > 992) {
            dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener("mouseenter", function () {
                    this.querySelector(".dropdown-toggle").click();
                });
                dropdown.addEventListener("mouseleave", function () {
                    this.querySelector(".dropdown-toggle").click();
                });
            });
        } else {
            dropdowns.forEach(function (dropdown) {
                dropdown.onmouseenter = null;
                dropdown.onmouseleave = null;
            });
        }
    }
    setupDropdown();
    window.addEventListener("resize", setupDropdown);

    // 2. Nút "Back to top"
    let backToTopBtn = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

if (document.querySelector("#registerBtn")) {
    document
        .querySelector("#registerBtn")
        .addEventListener("click", function (e) {
            e.preventDefault();
            if (
                document.querySelector("#registerUsername").value.includes("@") &&
                document.querySelector("#registerUsername").value.endsWith(".com") &&
                document.querySelector("#registerPassword").value ==
                document.querySelector("#confirmPassword").value
            ) {
                const newUser = {
                    email: document.querySelector("#registerUsername").value,
                    password: document.querySelector("#registerPassword").value,
                };
                accountLocal.push(newUser);
                localStorage.setItem("accounts", JSON.stringify(accountLocal));
                window.location.href = "./login.html";
            }
        });
}
if (document.querySelector("#loginBtn")) {
    document.querySelector("#loginBtn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("safs");

        if (
            accountLocal.find(
                (account) =>
                    account.email == document.querySelector("#loginUsername").value &&
                    account.password == document.querySelector("#loginPassword").value
            )
        ) {
            window.location.href = "./bookings.html";
        }
    });
}