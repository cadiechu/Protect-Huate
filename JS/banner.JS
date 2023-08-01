//   Header Banner
let listBanners = [
    "./media/Banner/banner2.avif",
    "./media/Banner/banner3.avif",
    "./media/Banner/banner4.jpeg",
    "./media/Banner/banner5.avif",
    "./media/Banner/banner6.avif",
    "./media/Banner/banner7.avif",
    "./media/Banner/banner8.avif",
    "./media/Banner/banner9.jpg",
    "./media/Banner/banner10.jpg",
    "./media/Banner/banner11.jpg",
    "./media/Banner/banner16.jpeg",
    "./media/Banner/banner17.jpg",
]
let count = -1;
let imageInterval = function banner() {
    count++;
    document.getElementById("listimg").src = listBanners[count];
    if (count == 11) {
        count = 0;
    }
}
setInterval(() => {
    imageInterval();
}, 4000)
