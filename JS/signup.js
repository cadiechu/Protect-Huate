function createId() {
    return Math.floor(Math.random() * 9999999999999 + new Date().getMilliseconds())
}
let users = JSON.parse(localStorage.getItem("username")) || [];
function getSignup(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let email = document.getElementById("email").value;
    if (password != confirmpassword || password.length < 3) {
        console.log("Xác nhận mật khẩu không khớp hoặc mật khẩu không đủ 8 ký tự!");
        return;
    }

    let userInfor = {
        username: username,
        email: email,
        password: password,
        cart: [],
        idUser: createId()
    }
    let checkSignup = users.find((item) => {
        return item.username == username;
    })
    if (checkSignup) {
        console.log("tài khoản đã tồn tại!");

        return;
    }
    users.push(userInfor);
    console.log("đăng kí thành công!");
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "../html/login.html";
} 