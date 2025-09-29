/**
  * Bài tập nhóm 09 - D24TXCN07-B - Coffe Shop LandingPage & Coffee Orders
  * Thành viên: 
  * * Phạm Phương Anh - B24DTCN413
  * * Tôn Phạm Quang Huy - B24DTCN423
  * * Bùi ĐỨc Lợi - B24DTCN429
 */


const tableListBooking = document.querySelector("#list-bookings")
const BtnPageElement = document.querySelector("#numberPageElement");
const btnPrevPage = document.querySelector("#PrevBtnBox");
const btnNextPage = document.querySelector("#NextBtnBox");
const addProjectBtn = document.querySelector("#addProjectBtn");

const listBooking = JSON.parse(localStorage.getItem("bookings")) || [];

// Hàm renderPage
let currentPage = 1; // Mặc định trang đầu tiên là 1
// totalPerPage
const totalPerPage = 5;
let totalPages;
let start = 0; // Biến cho vị trí bắt đầu
let end = 4; // Biến cho vị trí kết thúc
// Mặc định giá trị bắt đầu vfa kết thúc cho danh sách trang đầu tiên


function renderBookingList() {
    tableListBooking.innerHTML = "";
    // Lọc ra các dự án mà người đang đăng nhập tạo ra
    const filterBooking = listBooking

    start = (currentPage - 1) * totalPerPage;
    end = currentPage * totalPerPage;

    if (end >= filterBooking.length) {
        end = filterBooking.length; // Nếu vị trí kết thúc theo công thức lớn hơn tổng số dự án trong mảng thì gán lại cho end bằng listProject.length luôn
    }
    for (let i = start; i < end; i++) {
        const booking = filterBooking[i];
        let actionHTML = "";

        if (booking.status === "pending" || !booking.status) {
            actionHTML = `
            <button id="editBtn" onclick="cancelBookingInfor('${booking.email}')">Hủy bàn</button>
            <button id="deleteBtn" onclick="doneBooking('${booking.email}')">Hoàn thành</button>
        `;
        } else if (booking.status === "done") {
            actionHTML = `<span style="color: green; font-weight: bold;">Đã hoàn thành</span>`;
        }

        tableListBooking.innerHTML += `
        <tr>
            <td id="idBooking">${i + 1}</td>
            <td id="bookingClient">${booking.name}</td>
            <td id="bookingEmailClient">${booking.email}</td>
            <td id="reserveTime">${(booking.reserveTime)} ${booking.reserveDate}</td>
            <td id="bookingTime">${JSON.stringify(booking.bookingDateTime)}</td>
            <td id="actionToBooking">${actionHTML}</td>
        </tr>`;
    }
    console.log("tableProjectList: ", tableListBooking);
}

function renderPage() {
    console.log("renderPage");

    const filterBooking = listBooking
    // reset lại danh sách nút trang --> không bị lặp lại
    BtnPageElement.innerHTML = "";

    // total record - tổng số lượng project = listProject.length
    totalPages = Math.ceil(filterBooking.length / totalPerPage);
    for (let i = 1; i <= totalPages; i++) {
        console.log("Nút số: ", i);

        //tạo ra element Button cho mỗi lần lặp
        const btnPage = document.createElement("button");
        console.log("btnPage: ", btnPage);

        btnPage.classList.add("buttonChild");
        // Gán tiêu đề cho button
        btnPage.textContent = i;

        // Kiểm tra xem trang nào đang được chọn --> thì active cho btn trang đó
        if (currentPage === i) {
            btnPage.classList.add("buttonChild-Active");
        }
        //Kiểm tra điều kiện cho nút Next và disabled
        if (currentPage === totalPages) {
            btnNextPage.setAttribute("disabled", true);
        } else {
            btnNextPage.removeAttribute("disabled");
        }

        // Tương tự kiểm tra điều kiện cho nút Prev và disable
        if (currentPage === 1) {
            btnPrevPage.setAttribute("disabled", true);
        } else {
            btnPrevPage.removeAttribute("disabled");
        }

        // tạo event click cho button đại diện cho trang
        btnPage.addEventListener("click", function () {
            // Khi click vào từng button thì ==> gán lại giá trị cho currentPage  = giá trị mà nút bấm vào
            currentPage = i;
            console.log("currentPage: ", currentPage);
            renderPage(); // render lại số trang
            renderBookingList(filterBooking);
        });
        BtnPageElement.appendChild(btnPage);
    }
    // start = (currentPage - 1) * totalPerPage;
    // end = currentPage * totalPerPage;
}

renderBookingList()
renderPage()


const cancelBookingInfor = (email) => {
    if (confirm("Bạn có chắc chắn muốn HỦY bàn này không?")) {
        const index = listBooking.findIndex(b => b.email === email);
        if (index !== -1) {
            // Xoá phần tử tại vị trí index
            listBooking.splice(index, 1);

            // Lưu lại vào localStorage
            localStorage.setItem("bookings", JSON.stringify(listBooking));

            // Render lại danh sách + phân trang
            renderBookingList();
            renderPage();
        }
    }
};
const doneBooking = (email) => {
    if (confirm("Bàn được đặt đã hoàn thành ?")) {
        const index = listBooking.findIndex(b => b.email === email);
        if (index !== -1) {
            listBooking[index].status = "done";

            localStorage.setItem("bookings", JSON.stringify(listBooking));

            renderBookingList();
            renderPage();
        }
    }
};