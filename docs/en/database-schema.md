### Updated Entities List:
1. **Users**
2. **Products**
3. **Categories**
4. **Orders**
5. **Order Items**
6. **Wishlist**
7. **Reviews**
8. **Policies**

---

### 1. **Users**  
Table to store user data (customers and admins).

| Field           | Data Type             | Description                     |
| --------------- | --------------------- | ------------------------------- |
| `id`            | INT (Primary Key)     | Unique identifier for the user. |
| `name`          | VARCHAR(100)          | User's name.                    |
| `email`         | VARCHAR(255) UNIQUE   | Email address (must be unique). |
| `password`      | VARCHAR(255)          | Password (encrypted).           |
| `phone`         | VARCHAR(20) UNIQUE    | Phone number (must be unique).  |
| `address`       | TEXT                  | User's address.                 |
| `profile_image` | VARCHAR(255)          | User's profile image URL.       |
| `role`          | ENUM('user', 'admin') | User role (Customer or Admin).  |
| `created_at`    | DATETIME              | Account creation date.          |
| `updated_at`    | DATETIME              | Last account update date.       |

---

### 2. **Products**  
Table to store product data.

| Field         | Data Type         | Description                         |
| ------------- | ----------------- | ----------------------------------- |
| `id`          | INT (Primary Key) | Unique product identifier.          |
| `name`        | VARCHAR(255)      | Product name.                       |
| `description` | TEXT              | Product description.                |
| `price`       | DECIMAL(10, 2)    | Product price.                      |
| `stock`       | INT               | Available stock quantity.           |
| `category_id` | INT (Foreign Key) | Category ID the product belongs to. |
| `image_url`   | VARCHAR(255)      | Product image URL.                  |
| `created_at`  | DATETIME          | Product addition date.              |
| `updated_at`  | DATETIME          | Last product update date.           |

---

### 3. **Categories**  
Table to store product categories.

| Field                | Data Type         | Description                             |
| -------------------- | ----------------- | --------------------------------------- |
| `id`                 | INT (Primary Key) | Unique category identifier.             |
| `name`               | VARCHAR(100)      | Category name.                          |
| `description`        | TEXT              | Category description.                   |
| `parent_category_id` | INT (Foreign Key) | Parent category ID (for subcategories). |
| `created_at`         | DATETIME          | Category creation date.                 |
| `updated_at`         | DATETIME          | Last category update date.              |

---

### 4. **Orders**  
Table to store order data.

| Field          | Data Type                                 | Description                   |
| -------------- | ----------------------------------------- | ----------------------------- |
| `id`           | INT (Primary Key)                         | Unique order identifier.      |
| `user_id`      | INT (Foreign Key)                         | User ID who placed the order. |
| `total_amount` | DECIMAL(10, 2)                            | Total amount for the order.   |
| `status`       | ENUM('Pending', 'Completed', 'Cancelled') | Order status.                 |
| `created_at`   | DATETIME                                  | Order creation date.          |
| `updated_at`   | DATETIME                                  | Last order update date.       |

---

### 5. **Order Items**  
Table to store order item details.

| Field        | Data Type         | Description                         |
| ------------ | ----------------- | ----------------------------------- |
| `id`         | INT (Primary Key) | Unique item identifier.             |
| `order_id`   | INT (Foreign Key) | Order ID the item belongs to.       |
| `product_id` | INT (Foreign Key) | Product ID.                         |
| `quantity`   | INT               | Product quantity in the order.      |
| `price`      | DECIMAL(10, 2)    | Price of the product at order time. |
| `created_at` | DATETIME          | Item addition date.                 |
| `updated_at` | DATETIME          | Last item update date.              |

---

### 6. **Wishlist**  
Table to store products added to users' wishlists.

| Field        | Data Type         | Description             |
| ------------ | ----------------- | ----------------------- |
| `id`         | INT (Primary Key) | Unique item identifier. |
| `user_id`    | INT (Foreign Key) | User ID.                |
| `product_id` | INT (Foreign Key) | Product ID.             |
| `created_at` | DATETIME          | Wishlist addition date. |
| `updated_at` | DATETIME          | Last item update date.  |

---

### 7. **Reviews**  
Table to store user reviews for products.

| Field        | Data Type         | Description                   |
| ------------ | ----------------- | ----------------------------- |
| `id`         | INT (Primary Key) | Unique review identifier.     |
| `user_id`    | INT (Foreign Key) | User ID who wrote the review. |
| `product_id` | INT (Foreign Key) | Product ID.                   |
| `comment`    | TEXT              | User's comment.               |
| `created_at` | DATETIME          | Review creation date.         |
| `updated_at` | DATETIME          | Last review update date.      |

---

### 8. **Policies**  
Table to store store policies (payment, shipping, return).

| Field         | Data Type         | Description                                           |
| ------------- | ----------------- | ----------------------------------------------------- |
| `id`          | INT (Primary Key) | Unique policy identifier.                             |
| `type`        | VARCHAR(50)       | Policy type (Payment, Shipping, Return).              |
| `name`        | VARCHAR(100)      | Policy name (e.g., "Fast Shipping").                  |
| `description` | TEXT              | Policy description (e.g., "Delivered within 3 days"). |
| `created_at`  | DATETIME          | Policy creation date.                                 |
| `updated_at`  | DATETIME          | Last policy update date.                              |

---

### 9. **Product Policies (Product_Policies)**  
Junction table to link products with policies.

| Field        | Data Type         | Description                     |
| ------------ | ----------------- | ------------------------------- |
| `id`         | INT (Primary Key) | Unique relationship identifier. |
| `product_id` | INT (Foreign Key) | Product ID.                     |
| `policy_id`  | INT (Foreign Key) | Policy ID.                      |
| `created_at` | DATETIME          | Relationship creation date.     |
| `updated_at` | DATETIME          | Last relationship update date.  |

---

### Table Relationships:
1. **Users**:
   - Can have many **Orders**.
   - Can have many **Wishlist** items.
   - Can have many **Reviews**.

2. **Products**:
   - Belongs to one **Category**.
   - Can have many **OrderItems**.
   - Can have many **Wishlist** items.
   - Can have many **Reviews**.
   - Can have many **Policies** through **Product_Policies**.

3. **Orders**:
   - Belongs to one **User**.
   - Contains many **OrderItems**.

4. **Policies**:
   - Can be linked to many **Products** through **Product_Policies**.

---