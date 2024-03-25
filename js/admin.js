// Function to fetch user data from the backend and display in a table
function fetchUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const usersSection = document.getElementById('users');
            usersSection.innerHTML = '<h2>Users</h2>';
            const usersTable = document.createElement('table');
            usersTable.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            `;
            users.forEach(user => {
                usersTable.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                    </tr>
                `;
            });
            usersSection.appendChild(usersTable);
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Function to fetch product data from the backend and display in a table
function fetchProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productsSection = document.getElementById('products');
            productsSection.innerHTML = '<h2>Products</h2>';
            const productsTable = document.createElement('table');
            productsTable.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            `;
            products.forEach(product => {
                productsTable.innerHTML += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                `;
            });
            productsSection.appendChild(productsTable);
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Fetch users and products when the page loads
window.onload = function() {
    fetchUsers();
    fetchProducts();
};
