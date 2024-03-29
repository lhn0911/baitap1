let storedCurrentUser = localStorage.getItem('currentUser');

if (storedCurrentUser) {
    let currentUser = JSON.parse(storedCurrentUser);
    
    // Kiểm tra nếu người dùng hiện tại là admin
    if (currentUser.id === -1) { // Giả sử id của admin được đặt là -1
        // Hiển thị các phần tử phù hợp cho admin
        document.getElementById('firstname').textContent = currentUser.firstName;
        document.getElementById('shop').style.display = 'inline-block';
        document.getElementById('userlogout').style.display = 'inline-block';
        document.getElementById('registerLink').style.display = 'none'; // Ẩn đăng ký
        document.getElementById('loginLink').style.display = 'none'; // Ẩn đăng nhập
        document.getElementById('userLink').style.display = 'inline-block'; // Hiển thị userLink
        document.getElementById('adquanly').style.display = 'inline-block'; // Hiển thị userLink


    } else {
        // Hiển thị các phần tử phù hợp cho người dùng thông thường
        document.getElementById('firstname').textContent = currentUser.firstName;
        document.getElementById('shop').style.display = 'inline-block';
        document.getElementById('userlogout').style.display = 'inline-block';
        document.getElementById('registerLink').style.display = 'none'; // Ẩn đăng ký
        document.getElementById('loginLink').style.display = 'none'; // Ẩn đăng nhập
        document.getElementById('userLink').style.display = 'inline-block'; // Hiển thị userLink
    }
} else {
    alert('Chào mừng đến với shop clothes!');
}
