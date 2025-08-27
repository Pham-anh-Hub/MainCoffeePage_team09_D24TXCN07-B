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
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
