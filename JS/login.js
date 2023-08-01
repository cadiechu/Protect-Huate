function getLogin(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            console.log("Đăng nhập thành công");
            localStorage.setItem("checkLogin", users[i].idUser)
            window.location.href = "../index.html";
            return; 

        }
    }
    console.log("Tài khoản không tồn tại hoặc sai mật khẩu!");
    localStorage.setItem("isLogin",true)
}
