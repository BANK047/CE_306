Week_6-1
-------------------------------------------------------------------------------------
Product.tsx :
รับค่า props 5 ตัว:
    imageUrl: string → ที่อยู่ของรูปสินค้า
    title: string → ชื่อสินค้า
    description: string → รายละเอียดสั้นๆ
    price: number → ราคาสินค้า
    onAddToCart: () => void → ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม Add to Cart

การทำงานภายใน
ใช้ div เป็นการ์ดที่จัดรูปแบบด้วย TailwindCSS
ส่วนบน: แสดง img ของสินค้า
ส่วนกลาง: แสดงชื่อ (title) และรายละเอียด (description)
ส่วนล่าง: แสดงราคา และปุ่ม Add to Cart
→ เมื่อกดปุ่มนี้ จะเรียกฟังก์ชัน onAddToCart ที่ถูกส่งมาจากภายนอก
-------------------------------------------------------------------------------------
App.tsx :
    เป็นหน้า หลัก ของแอป
    มีข้อมูลสินค้า (productData) เป็น array เก็บ id, title, description, price, imageUrl
    ฟังก์ชัน handleAddToCartClick(productTitle) → เวลาเรียก จะ alert แจ้งว่าเพิ่มสินค้านั้นลงในตะกร้าแล้ว

การทำงานภายใน:
    โครงสร้างหลักมี div ที่ทำ background สีเทาอ่อน (bg-gray-100) และจัด layout แบบ container
    แสดงหัวข้อ "รายการสินค้าของเรา"
    ใช้ Grid Layout (grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3) → ปรับจำนวนคอลัมน์อัตโนมัติตามขนาดจอ (Responsive)
        ใช้ .map() วนลูป productData
        → สร้าง <ProductCard /> สำหรับแต่ละสินค้า
        → ส่ง props (title, description, price, imageUrl) และฟังก์ชัน onAddToCart
-------------------------------------------------------------------------------------