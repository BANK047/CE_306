1. SkillTag.tsx และ SkillTag.css

      หน้าที่: ใช้แสดง ทักษะ (Skill) ของผู้ใช้ โดยมีชื่อทักษะและระดับความสามารถ
    การทำงาน:
      - รับ name (ชื่อทักษะ) และ level (Beginner | Intermediate | Advanced) 
      - แสดง <span> พร้อม class ตามระดับ

    CSS (SkillTag.css)
      .skill → สไตล์พื้นฐาน
      .beginner → สีเขียวอ่อน
      .intermediate → สีเหลืองอ่อน
      .advanced → สีแดงอ่อน
-----------------------------------------------------------------------
2. UserProfileCard.tsx และ UserProfileCard.css
    
      หน้าที่: ใช้แสดงข้อมูลผู้ใช้ 1 คน
    การทำงาน:
      - แสดง Avatar (หรือ placeholder ถ้าไม่มีรูป)
      - แสดงชื่อ, อีเมล
      - แสดงสถานะ Online/Offline พร้อมจุดสีเขียว/เทา
      - แสดงรายชื่อทักษะ โดยใช้ <SkillTag />
      - ปุ่ม View Details → เรียก onViewDetails(user.id)

    CSS (UserProfileCard.css)
      .card → กล่องโปรไฟล์
      .avatar → รูปโปรไฟล์วงกลม
      .status.online / .status.offline → สีแสดงสถานะ
      .skill-container → จัด layout ของ Skill
      .view-details-btn → ปุ่มกดแสดงรายละเอียด
-----------------------------------------------------------------------
3. App.tsx และ App.css
      หน้าที่: เป็น root component ที่รวมทุกอย่าง
    การทำงาน:
      - สร้าง ข้อมูลผู้ใช้ (users) ตัวอย่าง 3 คน (Alice, Bob, Charlie)
      - ส่งข้อมูลแต่ละคนไปที่ <UserProfileCard />
      - เมื่อกดปุ่ม "View Details" → แสดง alert พร้อม ID ของ user

    CSS (App.css)
      .app-container → พื้นหลัง, padding
      .app-title → หัวเรื่อง "User Profile Cards"
      .cards-container → ใช้ flex จัดเรียงการ์ดผู้ใช้
-----------------------------------------------------------------------