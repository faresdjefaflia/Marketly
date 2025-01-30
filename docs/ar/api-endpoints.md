### **General Pages**
#### **HOME**
- **GET** `/api/home`
  - Description: List categories, list products
  - Response: 
    - categories: array
    - products: array

- **GET** `/api/categories`
  - Description: List categories
  - Response:
    - categories: array

- **GET** `/api/categories/:category`
  - Description: Get products for a specific category
  - Response:
    - products: array

- **GET** `/api/products`
  - Description: List products
  - Response:
    - products: array

- **GET** `/api/products/:id`
  - Description: Get a product by ID
  - Response:
    - product: object

---

### **User Pages**

#### **REGISTER**
- **POST** `/api/register`
  - Description: Register a new user
  - Body:
    - `name`: string
    - `email`: string
    - `password`: string
  - Response:
    - `message`: string
    - `user`: object

#### **LOGIN**
- **POST** `/api/login`
  - Description: Login for user
  - Body:
    - `email`: string
    - `password`: string
  - Response:
    - `token`: string
    - `user`: object

#### **WISHLIST**
- **GET** `/api/auth/user/wishlist`
  - Description: Get user's wishlist
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `wishlist`: array

- **DELETE** `/api/auth/user/wishlist/:id`
  - Description: Remove an item from user's wishlist
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

#### **SETTING**
- **GET** `/api/auth/user/settings`
  - Description: Get user's settings
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `settings`: object

- **PUT** `/api/auth/user/settings`
  - Description: Update user's settings
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `userInfo`: object
  - Response:
    - `message`: string

- **DELETE** `/api/auth/user/settings`
  - Description: Delete user's settings
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

#### **ORDERS**
- **GET** `/api/auth/user/orders`
  - Description: Get user's orders
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `orders`: array

- **GET** `/api/auth/user/orders/:id`
  - Description: Get specific order details
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `order`: object

---

### **Admin Pages (Dashboard)**
#### **ADMINS**
- **GET** `/api/auth/admin`
  - Description: Get all admins
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `admins`: array

- **POST** `/api/auth/admin/addadmin`
  - Description: Add a new admin
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `newAdmin`: json
  - Response:
    - `message`: string

- **DELETE** `/api/auth/admin/:id`
  - Description: Remove an admin by ID
  - ****Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

- **PUT** `/api/auth/admin/:id`
  - Description: Update admin details
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `name`: string
    - `email`: string
  - Response:
    - `message`: string

---

#### **CATEGORIES**
- **GET** `/api/auth/admin/categories`
  - Description: Get all categories
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `categories`: array

- **POST** `/api/auth/admin/categories`
  - Description: Add a new category
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `categoryInfo`: json
  - Response:
    - `message`: string

- **PUT** `/api/auth/admin/categories/:id`
  - Description: Update category details
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `categoryInfo`: json
  - Response:
    - `message`: string

- **DELETE** `/api/auth/admin/categories/:id`
  - Description: Delete a category by ID
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

---

#### **PRODUCTS**
- **GET** `/api/auth/admin/products`
  - Description: Get all products
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `products`: array

- **POST** `/api/auth/admin/products`
  - Description: Add a new product
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `productInfo`: json
  - Response:
    - `message`: string

- **PUT** `/api/auth/admin/products/:id`
  - Description: Update product details
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `productInfo`: json
  - Response:
    - `message`: string

- **DELETE** `/api/auth/admin/products/:id`
  - Description: Delete a product by ID
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

---

#### **ORDERS**
- **GET** `/api/auth/admin/orders`
  - Description: Get all orders
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `orders`: array

- **GET** `/api/auth/admin/orders/:id`
  - Description: Get details of an order by ID
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `order`: object

- **PUT** `/api/auth/admin/orders/:id`
  - Description: Update order status
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `status`: string
  - Response:
    - `message`: string

---

#### **USERS**
- **GET** `/api/auth/admin/users`
  - Description: Get all users
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `users`: array

- **DELETE** `/api/auth/admin/users`
  - Description: Remove a user
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `userId`: string
  - Response:
    - `message`: string

---

#### **REVIEWS**
- **GET** `/api/auth/admin/reviews`
  - Description: Get all reviews
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `reviews`: array

- **DELETE** `/api/auth/admin/reviews/:id`
  - Description: Delete a review by ID
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

---

#### **POLICES**
- **GET** `/api/auth/admin/policies`
  - Description: Get all policies
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `policies`: array

- **POST** `/api/auth/admin/policies`
  - Description: Add policies
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `policiesInfo` : json
  - Response:
    - `policies`: array

- **DELETE** `/api/auth/admin/policies/:id`
  - Description: Delete a policy by ID
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `message`: string

- **PUT** `/api/auth/admin/policies/:id`
  - Description: Update policy details
  - Header:
    - Authorization: Bearer <Token>
  - Body:
    - `policyInfo`: json
  - Response:
    - `message`: string

---

#### **REPORTS**
- **GET** `/api/auth/admin/reports`
  - Description: Get admin reports
  - Header:
    - Authorization: Bearer <Token>
  - Response:
    - `reports`: array

---


#### **LOGIN**
- **POST** `/api/admin/login`
  - Description: Login to dashboard for admin
  - Body:
    - `email`: string
    - `password`: string
  - Response:
    - `token`: string
    - `admin`: object

---
