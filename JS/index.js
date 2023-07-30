function clickUser() {
    document.getElementsByClassName("after_login")[0].style.display = "block";
    document.getElementsByClassName("after_login").addEventListener("click", () => {
        document.getElementsByClassName("before_login")[0].style.display = "none";
    })
}
function logOut() {
    let confirmlogout = confirm("Bạn đang đăng xuất!");
    if (confirmlogout) {
        localStorage.removeItem("checkLogin");
        window.location.reload();
    }
}