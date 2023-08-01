let products = JSON.parse(localStorage.getItem("products")) || [];
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
// pagination 
let start;
let end;
let perPage = 8;
let currentPage = 1;
let totalPage = Math.ceil(products.length / perPage);
let filteredProduct = [];

// filter



let users = JSON.parse(localStorage.getItem("users")) || [];
function renderProducts(products) {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        if (i >= start && i < end)
            element +=
                `
            <div>
               <div class="product__item">
                    <div class="product__item--image">
                    <img src="${products[i].image}" alt="">
                    </div>
                <div class="product__item--name">
                     ${products[i].productname}
                </div>
                <div class="product__item--price">
                     ${VND.format(products[i].price)}
                    <span class="material-symbols-outlined shoppingicon">
                        shopping_cart
                    </span>
                </div>
                <div class="product__item--detail">
                    <b>Detail:</b>
                    <br>
                    <span class="item--detail">
                       ${products[i].detail}
                    </span>

                </div>
            </div>
            </div>
            `
    }
    document.getElementsByClassName("products")[0].innerHTML = element;
}

function caculateStartEnd(current) {
    start = (current - 1) * perPage;
    end = current * perPage;
}

function pageNow(page) {
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        if (page - 1 == i) {
            pages[i].classList.add("page-now");
        } else {
            pages[i].classList.remove("page-now");
        }
    }
    currentPage = page;
    caculateStartEnd(currentPage);
    renderProducts(products);
}
pageNow(currentPage);


function pagination(totalPage) {
    let text = "";
    for (let i = 0; i < totalPage; i++) {
        text += `
            <li class="page" onclick="pageNow(${i + 1})">${i + 1}</li>
            `
    }
    document.getElementById("pages").innerHTML = text;
}
pagination(totalPage);

function filterProducts(index) {
    if (index == 1) {
        let listgift = products.filter(function (obj) {
            return obj.type == "gift";
        });
        filteredProduct = listgift;
    } else if (index == 2) {
        let listcongratulation = products.filter(function (obj) {
            return obj.type == "congratulation";
        });
        filteredProduct = listcongratulation;
    } else if (index == 3) {
        let listplant = products.filter(function (obj) {
            return obj.type == "display";
        });
        filteredProduct = listplant;
    } else if (index == 4) {
        let listsadness = products.filter(function (obj) {
            return obj.type == "sadness";
        });
        filteredProduct = listsadness;
    } else {
        filteredProduct = products;
    }
    totalPage = Math.ceil(filteredProduct.length / perPage);
    pagination(totalPage, filteredProduct);
    pageFilterNow(1);
}

function pageFilterNow(page) {
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        if (page - 1 == i) {
            pages[i].classList.add("page-now");
        } else {
            pages[i].classList.remove("page-now");
        }
    }
    currentPage = page;
    caculateStartEnd(currentPage);
    renderProducts(filteredProduct);
}

function increasePage() {
    currentPage = currentPage + 1;
    if (currentPage > totalPage) {
        currentPage = 7;
        return;
    }
    pageNow(currentPage);
    renderProducts(products);
}

function decreasePage() {
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
        return;
    }
    pageNow(currentPage);
    renderProducts(products);
}






















        // renderListImages();
        // function renderListImages(image) {
        //     const listBanner = document.getElementsByClassName("list__banner");
        //     for (let i = 0; i < image.length; i++) {
        //         listBanner[0].innerHTML += `<img class="banner__img" src="${image[i]}" alt="">`
        //     }
        // }
        // renderListImages(listBanners);

