function chek(){
    document.getElementById('main2').style.display = 'inline-block';
    document.getElementById('main1').style.display = 'none';
}

function shop(){
    // document.getElementById('main2').style.display = 'none';
    // document.getElementById('main1').style.display = 'none';
    // document.getElementById('main3').style.display = 'inline-block';
    window.open('test.html');
}
let data = ["../asset/imgs/quan1.jpg","../asset/imgs/quan2.jpg","../asset/imgs/quan3.jpg","../asset/imgs/quan4.jpg",'../asset/imgs/quan.jpg'];

let headerImg = document.getElementById("header-img");
let selectedIndex = 3; 

function renderImg(){
    let text = "";
    for (let i = 0; i < data.length; i++){
        text +=
        `
        <li onclick="changeMainImage(${i})">
            <img src="${data[i]}" alt="">
        </li>
        `;
    }
    let element = document.getElementById("imgs");
    element.innerHTML =
    `
    <button onclick="preimg()">PRE</button>  ${text}  <button onclick="nextimg()">NEXT</button>
    `;
    let imgs = element.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        if (i === selectedIndex) {
            imgs[i].style.opacity = 1;
        }
    }
}
renderImg();

function nextimg(){
    selectedIndex = (selectedIndex + 1) % data.length;
    headerImg.src = data[selectedIndex];
    renderImg();
}

function preimg(){
    selectedIndex = (selectedIndex - 1 + data.length) % data.length;
    headerImg.src = data[selectedIndex];
    renderImg();
}

function changeMainImage(index) {
    selectedIndex = index;
    headerImg.src = data[index];
            renderImg();
}

let selectedQuantity = 1; // Số lượng sản phẩm được chọn mặc định là 1

function addToCart(productId) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    let userId = localStorage.getItem('id');
    if (!userId) {
        console.log("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
        return;
    }

    // Lấy dữ liệu sản phẩm từ localStorage
    let products = JSON.parse(localStorage.getItem("products"));
    if (!products) {
        console.log("Dữ liệu sản phẩm không tồn tại trong localStorage.");
        return;
    }

    // Tìm sản phẩm trong danh sách sản phẩm
    let product = products.find(item => item.id === productId);
    if (!product) {
        console.log("Không tìm thấy sản phẩm trong danh sách.");
        return;
    }

    // Lấy số lượng từ localStorage
    let selectedQuantity = parseInt(localStorage.getItem("quantity"));
    if (isNaN(selectedQuantity) || selectedQuantity <= 0) {
        console.log("Số lượng không hợp lệ.");
        return;
    }
    // Lấy danh sách người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm người dùng hiện tại
    let currentUser = users.find(user => user.id === userId);

    // Nếu người dùng đã tồn tại
    if (currentUser) {
        // Tìm sản phẩm trong giỏ hàng của người dùng
        let existingProduct = currentUser.cart.find(item => item.id === productId);
        if (existingProduct) {
            // Tăng số lượng sản phẩm theo số lượng đã chọn
            existingProduct.quantity += selectedQuantity;
        } else {
            // Thêm sản phẩm vào giỏ hàng nếu chưa có
            currentUser.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: selectedQuantity,
                coupon: product.coupon,
                img : product.image,
            });
        }
    } else {
        // Nếu người dùng chưa tồn tại, thêm người dùng mới với giỏ hàng chứa sản phẩm
        users.push({
            id: userId,
            cart: [{
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: selectedQuantity,
                coupon:localStorage.getItem('coupon'),
                img : product.image,
            }]
        });
    }

    // Lưu lại danh sách người dùng vào localStorage
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Sản phẩm đã được thêm vào giỏ hàng của người dùng.");
}


function poppups(){
    window.open("popup.html", "popup", "width=400,height=400");
}