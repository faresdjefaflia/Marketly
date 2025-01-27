
### الروابط العامة:
1. `/` يتم هنا عرض جميع المنتجات و الفئات
2. `/categories` يتم هنا عرض جميع الفئات
3. `/category/{category-name}` يتم هنا عرض فئة واحدة
4. `/product/{product-id}` هنا يتم عرض صفحة المنتج
5. `/support` صفحة فيها نصوص فقط

### الروابط الخاصة بالمستخدم:
6. `/register` يقوم هنا المستخدم بالتسجيل كحساب جديد
7. `/login` يقوم هنا المستخدم بتسجيل الدخول
8. `/user/orders` صفحة خاصة تعرض جميع طلبات الشراء للمستخدم
9. `/user/settings` صفحة خاصة تسمح للمستخدم بتعديل اعداداته
10. `/user/wishlist` صفحة خاصة تعرض قائمة رغبات المستخدم 
11. `/checkout` صفحة خاصة يتم فيها عملية الشراء لاي منتج او مجموعة منتجات من قائمة الرغبات

### روابط لوحة التحكم (الإدارة):
12. `/admin/add-admin` صفحة خاصة بلوحة التحكم و المدير بعد ان يقوم بتسجيل الدخول للوحة التحكم هذه الصفحة تسمح باضافة مدير اخر
13. `/admin/login` صفحة تسجيل الدخول للوحة التحكم
14. `/admin/categories` صفحة لاضاففة تعديل حذف فئات
15. `/admin/products` صفحة لاضافة تعديل اضافة المنتجات
16. `/admin/orders` صفحة لعرض طلبات الشراء من المستخدمين
17. `/admin/users` صفحة لعرض قائمة الحسابات التي سجلت في المتجر
18. `/admin/policies` صفحة اضافة وحذف سياسات الشحن و الارجاع و الدفع


بالطبع! سأقوم بإعادة تصميم الـ endpoints بطريقة تقنية أكثر، مع ترتيبها حسب الصفحات وإضافة معلومات الهيدر (Headers) المطلوبة لكل طلب. سأذكر أيضًا ما يتم إرساله (Request) وما يتم استقباله (Response) بشكل مختصر.

---

### **1. الصفحات العامة**

#### **1.1 الصفحة الرئيسية (`/`)**
- **الطلب (Request):**
  - **Method:** `GET`
  - **Headers:** لا يوجد.
- **الاستجابة (Response):**
  - **الجداول:** `Products`, `Categories`.
  - **البيانات:** قائمة المنتجات والفئات.

#### **1.2 عرض جميع الفئات (`/categories`)**
- **الطلب (Request):**
  - **Method:** `GET`
  - **Headers:** لا يوجد.
- **الاستجابة (Response):**
  - **الجداول:** `Categories`.
  - **البيانات:** قائمة الفئات.

#### **1.3 عرض فئة معينة (`/categories/:categoryname`)**
- **الطلب (Request):**
  - **Method:** `GET`
  - **Headers:** لا يوجد.
- **الاستجابة (Response):**
  - **الجداول:** `Categories`, `Products`.
  - **البيانات:** تفاصيل الفئة والمنتجات المرتبطة بها.

#### **1.4 عرض صفحة المنتج (`/products/:id`)**
- **الطلب (Request):**
  - **Method:** `GET`
  - **Headers:** لا يوجد.
- **الاستجابة (Response):**
  - **الجداول:** `Products`, `Reviews`, `ShippingPolicies`, `ReturnPolicies`, `PaymentPolicies`
  - **البيانات:** تفاصيل المنتج و السياسات و التعليقات.
---

### **2. الصفحات الخاصة بالمستخدم**

#### **2.1 تسجيل مستخدم جديد (`/register`)**
- **الطلب (Request):**
  - **Method:** `POST`
  - **Headers:** `Content-Type: application/json`.
  - **البيانات المرسلة:** `id`, `name`, `email`, `password`, `phone`, `address`, `profile_image`, `role`, `created_at`
- **الاستجابة (Response):**
  - **الجداول:** `Users`.
  - **البيانات:** تأكيد إنشاء الحساب.

#### **2.2 تسجيل دخول المستخدم (`/login`)**
- **الطلب (Request):**
  - **Method:** `POST`
  - **Headers:** `Content-Type: application/json`.
  - **البيانات المرسلة:** `email`, `password`.
- **الاستجابة (Response):**
  - **الجداول:** `Users`.
  - **البيانات:** `token` للمصادقة.

#### **2.3 عرض طلبات المستخدم (`/user/orders`)**
- **الطلب (Request):**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
- **الاستجابة (Response):**
  - **الجداول:** `Orders`, `OrderDetails`.
  - **البيانات:** قائمة الطلبات وتفاصيلها.

#### **2.4 تعديل إعدادات المستخدم (`/user/settings`)**
- **الطلب (Request):**
  - **Method:** `PUT`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `id`, `name`, `email`, `password`, `phone`, `address`, `profile_image`, `role`
- **الاستجابة (Response):**
  - **الجداول:** `Users`.
  - **البيانات:** تأكيد التعديل.

#### **2.5 عرض قائمة الرغبات (`/user/wishlist`)**
- **الطلب (Request):**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
- **الاستجابة (Response):**
  - **الجداول:** `Wishlist`, `Products`.
  - **البيانات:** قائمة المنتجات في قائمة الرغبات.

#### **2.6 إتمام عملية الشراء (`/checkout`)**
- **الطلب (Request):**
  - **Method:** `POST`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `id`, `order_id`, `product_id`, `card_id`, `quantity`, `price_at_order`, `payment_policy_id`, `shipping_policy_id`, `return_policy_id`, `status`, `created_at`
- **الاستجابة (Response):**
  - **الجداول:** `Orders`, `OrderDetails`, `Cards`.
  - **البيانات:** تأكيد إنشاء الطلب.

---

### **3. صفحات لوحة التحكم (الإدارة)**

#### **3.1 إضافة مدير جديد (`/admin/add-admin`)**
- **الطلب (Request):**
  - **Method:** `POST`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `name`, `email`, `password`, `phone`, `address`, `profile_image`.
- **الاستجابة (Response):**
  - **الجداول:** `Users`.
  - **البيانات:** تأكيد إنشاء الحساب.

#### **3.2 تسجيل دخول المدير (`/admin/login`)**
- **الطلب (Request):**
  - **Method:** `POST`
  - **Headers:** `Content-Type: application/json`.
  - **البيانات المرسلة:** `email`, `password`.
- **الاستجابة (Response):**
  - **الجداول:** `Users`.
  - **البيانات:** `token` للمصادقة.

#### **3.3 إدارة الفئات (`/admin/categories`)**
- **عرض الفئات:**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
  - **الاستجابة:** قائمة الفئات.
- **إضافة فئة:**
  - **Method:** `POST`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `name`, `description`.
- **تعديل فئة:**
  - **Method:** `PUT`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `name`, `description`.
- **حذف فئة:**
  - **Method:** `DELETE`
  - **Headers:** `Authorization: Bearer <token>`.

#### **3.4 إدارة المنتجات (`/admin/products`)**
- **عرض المنتجات:**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
  - **الاستجابة:** قائمة المنتجات.
- **إضافة منتج:**
  - **Method:** `POST`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `name`, `short_description`, `long_description`, `price`, `stock`, `category_id`, `image_url`.
- **تعديل منتج:**
  - **Method:** `PUT`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** `name`, `short_description`, `long_description`, `price`, `stock`, `category_id`, `image_url`.
- **حذف منتج:**
  - **Method:** `DELETE`
  - **Headers:** `Authorization: Bearer <token>`.

#### **3.5 إدارة الطلبات (`/admin/orders`)**
- **عرض الطلبات:**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
  - **الاستجابة:** قائمة الطلبات وتفاصيلها.

#### **3.6 إدارة المستخدمين (`/admin/users`)**
- **عرض المستخدمين:**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
  - **الاستجابة:** قائمة المستخدمين.

#### **3.7 إدارة السياسات (`/admin/policies`)**
- **عرض السياسات:**
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`.
  - **الاستجابة:** قائمة السياسات.
- **إضافة سياسة:**
  - **Method:** `POST`
  - **Headers:** `Authorization: Bearer <token>`, `Content-Type: application/json`.
  - **البيانات المرسلة:** تختلف حسب نوع السياسة (`ShippingPolicies`, `ReturnPolicies`, `PaymentPolicies`).
- **حذف سياسة:**
  - **Method:** `DELETE`
  - **Headers:** `Authorization: Bearer <token>`.

---

### **ملاحظات عامة:**

1. **المصادقة (Authentication):**
   - يتم استخدام `Authorization: Bearer <token>` في الـ headers للوصول إلى الصفحات الخاصة بالمستخدم والإدارة.

2. **نوع البيانات:**
   - يتم إرسال البيانات بتنسيق `JSON` في الطلبات التي تتطلب ذلك (`POST`, `PUT`).

3. **الاستجابة:**
   - تكون الاستجابة دائمًا بتنسيق `JSON` وتتضمن `status` و`data`.

---

هذا التصميم مرتب ومنظم حسب الصفحات، مع توضيح المعلومات المطلوبة لكل طلب واستجابة. إذا كنت بحاجة إلى أي تعديلات إضافية، فأنا هنا للمساعدة! 😊
