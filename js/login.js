let storedCurrentUser = localStorage.getItem('currentUser');
if (storedCurrentUser) {
    let currentUser = JSON.parse(storedCurrentUser);
    document.getElementById('firstname').textContent = currentUser.firstName;
    document.getElementById('shop').style.display = 'inline-block';
    document.getElementById('userlogout').style.display = 'inline-block';
    document.getElementById('registerLink').style.display = 'none'; // Ẩn đăng ký
    document.getElementById('loginLink').style.display = 'none'; // Ẩn đăng nhập
    document.getElementById('userLink').style.display = 'inline-block'; // Hiển thị userLink
} else {
    alert('Chào mừng đến với shop clothes!');
}
