let storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        document.getElementById('firstname').textContent = storedUserName;
        document.getElementById('shop').style.display = 'inline-block';
        document.getElementById('userlogout').style.display = 'inline-block';
        document.getElementById('registerLink').style.display = 'none'; // Ẩn đăng ký
        document.getElementById('loginLink').style.display = 'none'; // Ẩn đăng nhập
        document.getElementById('userLink').style.display = 'inline-block'; // Hiển thị userLink
    } else {
        alert('Chào mừng đến với shop clothes!')
    }

    document.getElementById('userlogout').addEventListener('click', function() {
        localStorage.removeItem('userName');
        document.getElementById('shop').style.display = 'none';
        document.getElementById('userlogout').style.display = 'none';
        document.getElementById('registerLink').style.display = 'inline-block'; // Hiển thị đăng ký
        document.getElementById('loginLink').style.display = 'inline-block'; // Hiển thị đăng nhập
        document.getElementById('userLink').style.display = 'none'; // Ẩn userLink
    });