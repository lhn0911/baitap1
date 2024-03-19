document.getElementById('userlogout').addEventListener('click', function() {
    localStorage.removeItem('userName');
    document.getElementById('shop').style.display = 'none';
    document.getElementById('userlogout').style.display = 'none';
    document.getElementById('registerLink').style.display = 'inline-block'; // Hiển thị đăng ký
    document.getElementById('loginLink').style.display = 'inline-block'; // Hiển thị đăng nhập
    document.getElementById('userLink').style.display = 'none'; // Ẩn userLink
});