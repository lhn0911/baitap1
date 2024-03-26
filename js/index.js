// let products = [
//     {
//         image:"../asset/imgs/ao1.jpg",
//         name:"áo",
//         price:"199000",
//         id:1,
//         sale:"5%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/bo1.jpg",
//         name:"quần",
//         price:"175000",
//         id:2,
//         sale:"10%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/b1.jpg",
//         name:"áo",
//         price:"500000",
//         id:3,
//         sale:"15%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/c1.jpg",
//         name:"áo",
//         price:"250000",
//         id:4,
//         sale:"18%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/cb1.jpg",
//         name:"áo",
//         price:"100000",
//         id:5,
//         sale:"20%",

//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/quan.jpg",
//         name:"Quần jean ống rộng",
//         price:"120000",
//         id:6,
//         sale:"45%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/set1.jpg",
//         name:"comboo",
//         price:"200000",
//         id:7,
//         sale:"50%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
//     {
//         image:"../asset/imgs/comboo1.jpg",
//         name:"comboo",
//         price:"150000",
//         id:8,
//         sale:"90%",
//         size:["S","L","M","XL","2XL","Khác"],
//         color:["Đen","Trắng","Xanh"],
//         quatity:"1000",
//     },
// ]
// localStorage.setItem("products", JSON.stringify(products));



// let admin = [
//     {
//       email: "admin@gmail.com",
//       pass: "admin",
//     }
// ]
// localStorage.setItem("admin",JSON.stringify(admin));


let products= JSON.parse(localStorage.getItem('products'));
console.log(products);

function renderProducts() {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        element +=
            `
        <div class="sanpham">
            <img class="img" src="${products[i].image}" id="product_${products[i].id}">
            <div class="sale">${products[i].sale}</div>
            <span class="detail"><button onclick="showProductDetail(${products[i].id})">Chi tiết</button></span>
            <div class="thongtin">
                <p>Loại</p>
                <b>${products[i].name}</b>
            </div>
            <div class="thongtin">
                <p>Giá</p>
                <b>${products[i].price}</b>
            </div>
            <div class="thongtin">
                <p>Thêm</p>
                <button onclick="addToCart(${products[i].id})">
                    <span class="material-symbols-outlined">
                        add_shopping_cart
                    </span>
                </button>
            </div>
        </div>
        `;
    }
    document.getElementsByClassName('container')[0].innerHTML = element;
}


renderProducts();


function addToCart(productId) {
    // Lấy thông tin giỏ hàng từ local storage, nếu không có, tạo một giỏ hàng mới
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    if (cart[productId]) {
        // Nếu đã tồn tại, tăng số lượng lên 1
        cart[productId].quantity += 1;
    } else {
        // Nếu chưa tồn tại, thêm sản phẩm mới vào giỏ hàng với số lượng mặc định là 1
        cart[productId] = {
            quantity: 1,
            discountCode: "" // Mã giảm giá mặc định không có
        };
    }

    // Lưu thông tin giỏ hàng vào local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Hiển thị thông báo cho người dùng (nếu cần)
    alert("Sản phẩm đã được thêm vào giỏ hàng.");

    // Cập nhật giao diện nếu cần
}

function renderProducts(){
    let element = "";
    for(let i=0;i<products.length;i++){
        element += 
        `
        <div class="sanpham">
            <img class="img" src="${products[i].image}">
            <div class="sale">${products[i].sale}</div>
            <span class="detail"><button onclick="chek()">Chi tiết</button></span>
            <div class="thongtin">
                <p>Loại</p>
                <b>${products[i].name}</b>
            </div>
            <div class="thongtin">
                <p>Giá</p>
                <b>${products[i].price}</b>
            </div>
            <div class="thongtin">
                <p>Thêm</p>
                <button onclick="addToCart(${products[i].id})">
                    <span class="material-symbols-outlined">
                        add_shopping_cart
                    </span>
                </button>
            </div>
        </div>
        `;
    }
    // console.log(element)
    document.getElementsByClassName('container')[0].innerHTML=element;
}
renderProducts();

