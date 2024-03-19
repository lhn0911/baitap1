// let products = [
//     {
//         image:"../asset/imgs/ao1.jpg",
//         name:"áo",
//         price:"199000",
//         id:1,
//         sale:"5%",
//     },
//     {
//         image:"../asset/imgs/bo1.jpg",
//         name:"quần",
//         price:"175000",
//         id:2,
//         sale:"10%",
//     },
//     {
//         image:"../asset/imgs/b1.jpg",
//         name:"áo",
//         price:"500000",
//         id:3,
//         sale:"15%",
//     },
//     {
//         image:"../asset/imgs/c1.jpg",
//         name:"áo",
//         price:"250000",
//         id:4,
//         sale:"18%",
//     },
//     {
//         image:"../asset/imgs/cb1.jpg",
//         name:"áo",
//         price:"100000",
//         id:5,
//         sale:"20%",
//     },
//     {
//         image:"../asset/imgs/quan.jpg",
//         name:"comboo",
//         price:"120000",
//         id:6,
//         sale:"45%",
//     },
//     {
//         image:"../asset/imgs/set1.jpg",
//         name:"comboo",
//         price:"200.000",
//         id:7,
//         sale:"50%",
//     },
//     {
//         image:"../asset/imgs/comboo1.jpg",
//         name:"comboo",
//         price:"150.000",
//         id:8,
//         sale:"90%",
//     },
// ]
// localStorage.setItem("products", JSON.stringify(products));
let products= JSON.parse(localStorage.getItem('products'));
console.log(products);
//

//
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
                    <p>Hỗ trợ</p>
                    <b>Đổi trả</b>
                </div>
                
            </div>
        `
    }
    console.log(element)
    document.getElementsByClassName('container')[0].innerHTML=element;
}
renderProducts();

