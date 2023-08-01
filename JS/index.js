
function logOut() {
    let confirmlogout = confirm("Bạn đang đăng xuất!");
    if (confirmlogout) {
        localStorage.removeItem("checkLogin");
        window.location.reload();
    }
}
// function đổi btn login thành logout
const isLogin = localStorage.getItem("checkLogin")
if (isLogin) {
    document.getElementsByClassName("before_login")[0].style.display = "none";
    document.getElementsByClassName("after_login")[0].style.display = "block";
} else {
    document.getElementsByClassName("after_login")[0].style.display = "none";
    document.getElementsByClassName("before_login")[0].style.display = "block";
}