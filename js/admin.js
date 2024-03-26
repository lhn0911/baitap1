
function backhome(){
   window.location.href = "index.html";
}
function quanlyuser(){
    document.getElementById("quanlyuser").style.display = "inline-block";
    document.getElementById("quanlysp").style.display = "none";
}
function quanlysp(){
    document.getElementById("quanlysp").style.display = "inline-block";
    document.getElementById("quanlyuser").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    renderUserTable();
    document.getElementById("userTableBody").addEventListener("click", function(event) {
        let target = event.target;
        if (target.classList.contains("lock-btn")) {
            toggleLock(parseInt(target.dataset.index));
        } else if (target.classList.contains("delete-btn")) {
            deleteUser(parseInt(target.dataset.index));
        } else if (target.classList.contains("save-btn")) {
            saveUser(parseInt(target.dataset.index));
        }
    });
});

function renderUserTable() {
    let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
    let userTableBody = document.getElementById("userTableBody");

    formDataArray.forEach(function (user, index) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td style="text-align: center;">${index + 1}</td>
            <td style="text-align: center;">${user.firstName}</td>
            <td style="text-align: center;">${user.lastName}</td>
            <td style="text-align: center;">${user.email}</td>
            <td style="text-align: center;">${user.lock}</td>
            <td style="text-align: center;">
                <button class="lock-btn" data-index="${index}">${user.lock === 'yes' ? 'Unlock' : 'Lock'}</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        
        `;
        userTableBody.appendChild(row);
    });
}

function toggleLock(index) {
    let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
    let user = formDataArray[index];
    user.lock = user.lock === 'yes' ? 'no' : 'yes'; // Toggle lock status
    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

    // Update currentUser if it exists and matches the user being toggled
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.id === user.id) {
        currentUser.lock = user.lock;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    // Update the table with the new lock status
    let userTableBody = document.getElementById("userTableBody");
    let row = userTableBody.rows[index];
    row.cells[4].innerText = user.lock;

    // Change button text
    let lockBtn = row.cells[5].querySelector('.lock-btn');
    lockBtn.innerText = user.lock === 'yes' ? 'Unlock' : 'Lock';
}


function deleteUser(index) {
let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
formDataArray.splice(index, 1); // Remove user from array
localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

// Remove row from table
let userTableBody = document.getElementById("userTableBody");
userTableBody.deleteRow(index);
}
document.addEventListener("DOMContentLoaded", function () {
// Load user data from localStorage and render the table

renderProductTable();

// Add event listeners for Lock, Edit, Delete, and Save buttons
});

function renderProductTable() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let productTableBody = document.getElementById("productTableBody");

    products.forEach(function (product, index) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td style="text-align: center;">${index + 1}</td>
            <td style="text-align: center;">${product.name}</td>
            <td style="text-align: center;"><img src="${product.image}" alt="Product Image" style="width: 100px;"></td> <!-- Thêm cột ảnh -->
            <td style="text-align: center;">${product.quatity}</td>
            <td style="text-align: center;">${product.price}</td>
            <td style="text-align: center;">
                <button class="edit-product-btn" onclick="editProduct(${index})">Sửa</button>
                <button class="delete-product-btn" onclick="deleteProduct(${index})">Xóa</button>
            </td>
        `;
        productTableBody.appendChild(row);
    });
}

function editProduct(index) {
let products = JSON.parse(localStorage.getItem('products')) || [];
let product = products[index];

// Hiển thị một cửa sổ hoặc modal để sửa thông tin sản phẩm
// Ví dụ: có thể sử dụng prompt hoặc modal để nhập thông tin mới
let newName = prompt("Nhập tên sản phẩm mới:", product.name);
let newQuatity = prompt("Nhập số lượng mới:", product.quatity);
let newPrice = prompt("Nhập giá mới:", product.price);
let newImage = prompt("Nhập link ảnh mới:",product.image);

// Cập nhật thông tin sản phẩm
product.name = newName;
product.quatity = newQuatity;
product.price = newPrice;
product.image = newImage;
// Cập nhật dữ liệu trong localStorage
localStorage.setItem('products', JSON.stringify(products));

// Cập nhật dòng trong bảng
let productTableBody = document.getElementById("productTableBody");
let row = productTableBody.rows[index];
row.cells[1].innerText = newName;
row.cells[2].innerText = newQuatity;
row.cells[3].innerText = newPrice;
}
function deleteProduct(index) {
let products = JSON.parse(localStorage.getItem('products')) || [];
products.splice(index, 1); // Xóa sản phẩm khỏi mảng
localStorage.setItem('products', JSON.stringify(products));

// Xóa dòng khỏi bảng
let productTableBody = document.getElementById("productTableBody");
productTableBody.deleteRow(index);
}
function addProduct() {
    // Nhận thông tin sản phẩm mới từ người dùng
    let newName = prompt("Nhập tên sản phẩm mới:");
    let newQuatity = parseInt(prompt("Nhập số lượng mới:"));
    let newPrice = parseFloat(prompt("Nhập giá mới:"));
    let newImage = prompt("Nhập link ảnh");
    let newSale = (prompt("Nhập sale"));

    // Tạo đối tượng sản phẩm mới
    let newProduct = {
        name: newName,
        quatity: newQuatity,
        price: newPrice,
        image: newImage,
        sale : newSale
    };
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
}

