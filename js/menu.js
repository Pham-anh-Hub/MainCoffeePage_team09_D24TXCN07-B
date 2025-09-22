const listFavor = JSON.parse(localStorage.getItem("listFavor") || "[]");

document.querySelectorAll(".list-modern-coffee > div").forEach(item => {
    item.addEventListener("click", () => {
        const coffeeId = item.id;
        const coffeeName = item.querySelector("p").textContent;
        const coffeeImg = item.querySelector("img").src;

        console.log("Thông tin món:", {
            id: coffeeId,
            name: coffeeName,
            img: coffeeImg
        });
        const pushIntoFavour = {
            id: coffeeId,
            name: coffeeName,
            img: coffeeImg
        }

        Swal.fire({
            title: "<strong>Bạn yêu thích món này?</strong>",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Hủy',
            cancelButtonAriaLabel: "Thumbs down"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Người dùng bấm Thích 👍");
                // Thêm vào localStorage ở đây
                if (!listFavor.includes(pushIntoFavour)) {
                    listFavor.push(pushIntoFavour);
                    localStorage.setItem("listFavor", JSON.stringify(listFavor))
                }
            } else if (result.isDismissed) {
                console.log("Người dùng bấm Hủy 👎");
            }
        });;
        console.log("Các món yêu thích: ", listFavor);




    });
});

document.querySelectorAll(".list-tradition-coffee > div").forEach(item => {
    item.addEventListener("click", () => {
        const coffeeId = item.id;
        const coffeeName = item.querySelector("p").textContent;
        const coffeeImg = item.querySelector("img").src;

        console.log("Thông tin món:", {
            id: coffeeId,
            name: coffeeName,
            img: coffeeImg
        });
        const pushIntoFavour = {
            id: coffeeId,
            name: coffeeName,
            img: coffeeImg
        }

        Swal.fire({
            title: "<strong>Bạn yêu thích món này?</strong>",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Hủy',
            cancelButtonAriaLabel: "Thumbs down"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Người dùng bấm Thích 👍");
                // Thêm vào localStorage ở đây
                if (!listFavor.includes(pushIntoFavour)) {
                    listFavor.push(pushIntoFavour);
                    localStorage.setItem("listFavor", JSON.stringify(listFavor))
                }
            } else if (result.isDismissed) {
                console.log("Người dùng bấm Hủy 👎");
            }
        });;
        console.log("Các món yêu thích: ", listFavor);
    });
});