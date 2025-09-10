  Week_3 
-------------------------------------------------------------------------
  3.1
  1.  สร้าง const score มารับคะแนน <br>
  2.  ใช้ if เพื่อเช็ค score ตามเงื่อนไข <br>
  3.  | 80 - 100   | -> A <br>
      | 70 - 79    | -> B <br>
      | 60 - 69    | -> C <br>
      | 50 - 59    | -> D <br>
      | score < 50 | -> F 
-------------------------------------------------------------------------
  3.2
  1.  สร้าง Product_Price และ Discount_Percentage มารับค่า ราคากับส่วนลด
  2.  สร้างตัวแปร Discount_Price เพื่อมาคำนวณราคาที่หักส่วนลดแล้ว นำมาตรวจสอบเงื่อนไข
  3.  | Discount_Price <= 0   | -> 0 Baht
      | Discount_Price < 500  | -> เพิ่มค่าทำเนียม 50 เข้าไป
      | Discount_Price >= 500 | -> ส่งราคาที่หักส่วนลดไป  
-------------------------------------------------------------------------
  3.3
  1.  สร้าง Array students 3 คนซึ่งข้างในเก็บ name, grade รูปแบบ Obj 
  2.  สร้าง function showStudentCount ไม่รับ parameter -> เพื่อนับจำนวน students ทั้งหมด
  3.  ใช้ forEach loop students แสดงผล |Student index: name - Grade: grade|
  4.  ใช้ .Lenght หาจำนวน นักเรียนทั้งหมด
-------------------------------------------------------------------------
  3.4
  1.  สร้าง Array product 6 สินค้าซึ่งข้างในเก็บ price และ discount รูปแบบ Obj
  2.  สร้าง function calculatorTotal ไม่รับ parameter -> รวมราคาสินค้าทั้งหมดหลังหักส่วนลด
  3.  ใช้ forEach วน Array product ทั้งหมด , ตั้งตัวแปร discountPrice ที่คำนวณสินค้าที่หักส่วนลดแล้ว
  4.  สร้างตัวแปร total เพื่อรวม discountPrice
  5.  แสดงผลรวมด้วย calculatorTotal
-------------------------------------------------------------------------
  3.5
  1.  สร้าง Array students ซึ่งข้างในเก็บ name, score รูปแบบ Obj
  2.  สร้าง function filterPassStudents รับ parameter เพื่อคัดคนผ่านเกณฑ์
  3.  ใช้ forEach ลูป students ตามเงื่อนไขของ if...else
      ผ่าน   | Student: student.name passed with score: student.score |
      ไม่ผ่าน | Student: student.name failed with score: student.score | 
-------------------------------------------------------------------------
