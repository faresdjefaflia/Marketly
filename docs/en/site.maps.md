### **User Pages**

1. **Homepage**  
   - **URL**: `/`  
   - **Description**: Displays main categories, featured products, special offers, and login options.  
   - **Page Type**: Public  

2. **Categories Page**  
   - **URL**: `/categories`  
   - **Description**: Displays all product categories in a grid or list view.  
   - **Page Type**: Public  

3. **Category Page**  
   - **URL**: `/category/{category-name}`  
   - **Description**: Displays products of a specific category with filtering and sorting options.  
   - **Page Type**: Public  

4. **Product Details Page**  
   - **URL**: `/product/{product-id}`  
   - **Description**: Displays product details including images, description, price, reviews, and add-to-cart option.  
   - **Page Type**: Public  

5. **User Registration Page**  
   - **URL**: `/register`  
   - **Description**: A form for new user registration, including required fields to create an account.  
   - **Page Type**: Private  

6. **Login Page**  
   - **URL**: `/login`  
   - **Description**: A login form for existing users.  
   - **Page Type**: Private  

7. **Order Management Page**  
   - **URL**: `/user/orders`  
   - **Description**: Displays details of past and current orders for the user, along with the status of each order.  
   - **Page Type**: Private  

8. **User Settings Page**  
   - **URL**: `/user/settings`  
   - **Description**: Allows users to modify their personal information and update their password.  
   - **Page Type**: Private  

9. **Support Contact Page**  
   - **URL**: `/support`  
   - **Description**: Allows users to send inquiries or request technical support.  
   - **Page Type**: Public  

10. **Wishlist Page**  
    - **URL**: `/user/wishlist`  
    - **Description**: Displays products added by the user to their wishlist.  
    - **Page Type**: Private  

11. **Checkout Page**  
    - **URL**: `/checkout`  
    - **Description**: A page to complete the payment process, select a payment method, and enter shipping details.  
    - **Page Type**: Private  

---

### **Admin Panel Pages**

1. **Admin Dashboard**  
   - **URL**: `/admin/addadmin`  
   - **Description**: Provides an overview of performance, recent orders, and statistical charts.  
   - **Page Type**: Private  

2. **Admin Login Page**  
   - **URL**: `/admin/login`  
   - **Description**: A login form specifically for admins to access the admin panel.  
   - **Page Type**: Private  

3. **Categories Management Page**  
   - **URL**: `/admin/categories`  
   - **Description**: Add, edit, or delete available categories in the store.  
   - **Page Type**: Private  

4. **Products Management Page**  
   - **URL**: `/admin/products`  
   - **Description**: Add new products, update existing ones, or delete them.  
   - **Page Type**: Private  

5. **Orders Management Page**  
   - **URL**: `/admin/orders`  
   - **Description**: View order details and manage their status (pending, completed, canceled).  
   - **Page Type**: Private  

6. **Users Management Page**  
   - **URL**: `/admin/users`  
   - **Description**: Manage user accounts, ban accounts, or update them.  
   - **Page Type**: Private  

7. **Add Admin Page**  
   - **URL**: `/admin/add-admin`  
   - **Description**: Allows the admin to add a new admin with specified permissions.  
   - **Page Type**: Private  

8. **Policies Management Page**  
   - **URL**: `/admin/policies`  
   - **Description**: Modify shipping, payment, and return policies.  
   - **Page Type**: Private  

---

### **User Pages Table**

| Page              | URL                         | Description                                                                                     | Page Type |
| ----------------- | --------------------------- | ----------------------------------------------------------------------------------------------- | --------- |
| Homepage          | `/`                         | Displays main categories, featured products, special offers, and login options.                 | Public    |
| Categories Page   | `/categories`               | Displays all product categories in a grid or list view.                                         | Public    |
| Category Page     | `/category/{category-name}` | Displays products of a specific category with filtering and sorting options.                    | Public    |
| Product Details   | `/product/{product-id}`     | Displays product details including images, description, price, reviews, and add-to-cart option. | Public    |
| User Registration | `/register`                 | A form for new user registration, including required fields to create an account.               | Private   |
| Login Page        | `/login`                    | A login form for existing users.                                                                | Private   |
| Order Management  | `/user/orders`              | Displays details of past and current orders for the user, along with the status of each order.  | Private   |
| User Settings     | `/user/settings`            | Allows users to modify their personal information and update their password.                    | Private   |
| Support Contact   | `/support`                  | Allows users to send inquiries or request technical support.                                    | Public    |
| Wishlist Page     | `/user/wishlist`            | Displays products added by the user to their wishlist.                                          | Private   |
| Checkout Page     | `/checkout`                 | A page to complete the payment process, select a payment method, and enter shipping details.    | Private   |

---

### **Admin Panel Pages Table**

| Page                  | URL                 | Description                                                                 | Page Type |
| --------------------- | ------------------- | --------------------------------------------------------------------------- | --------- |
| Admin Dashboard       | `/admin/addadmin`   | Provides an overview of performance, recent orders, and statistical charts. | Private   |
| Admin Login           | `/admin/login`      | A login form specifically for admins to access the admin panel.             | Private   |
| Categories Management | `/admin/categories` | Add, edit, or delete available categories in the store.                     | Private   |
| Products Management   | `/admin/products`   | Add new products, update existing ones, or delete them.                     | Private   |
| Orders Management     | `/admin/orders`     | View order details and manage their status (pending, completed, canceled).  | Private   |
| Users Management      | `/admin/users`      | Manage user accounts, ban accounts, or update them.                         | Private   |
| Add Admin             | `/admin/add-admin`  | Allows the admin to add a new admin with specified permissions.             | Private   |
| Policies Management   | `/admin/policies`   | Modify shipping, payment, and return policies.                              | Private   |

---