const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
let idUser = localStorage.getItem("checkLogin") || [];
let productList = JSON.parse(localStorage.getItem("products"));
let users = JSON.parse(localStorage.getItem("users")) || [];
function rederCarts() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            let element = "";
            let result = users[i].cart;
            let total = result.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

            for (let j = 0; j < result.length; j++) {
                element +=
                    `
                    <tr>
<td>${result[j].productname}</td>
<td class="tboby_quantity">
<span class="material-symbols-outlined" onclick="decreaseQuantity(${j})">
do_not_disturb_on
</span>
${result[j].quantity}
<span class="material-symbols-outlined" onclick="increaseQuantity(${j})">
add_circle
</span>
</td>
<td>${VND.format(result[j].price * result[j].quantity)}</td>
</tr>
                `
            }
            document.getElementsByClassName("tbody")[0].innerHTML = element;
            document.getElementById("total").innerHTML = `Total : ${VND.format(total)}`;
        }
    }
}
rederCarts();

// render số lượng sản phẩm trong giỏ hàng
//  function tăng số lượng sản phẩm 
function increaseQuantity(idProduct) {
    // lấy giỏ hàng ra
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            // users[i].cart .
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == users[i].cart[idProduct].id) {
                    users[i].cart[idProduct].quantity++
                    localStorage.setItem("users", JSON.stringify(users));
                    rederCarts();
                }
            }
        }
    }
}

// decreaseQuantity
function decreaseQuantity(idProduct) {
    // lấy giỏ hàng ra
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            // users[i].cart
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == users[i].cart[idProduct].id) {
                    if (users[i].cart[idProduct].quantity == 1) {
                        users[i].cart.splice(idProduct, 1);
                    } else {
                        users[i].cart[idProduct].quantity--
                    }
                    localStorage.setItem("users", JSON.stringify(users));
                    rederCarts();
                }
            }
        }
    }
}
function getOders() {
    alert("Thanks You!!!")
    window.location.href = "../index.html";
}