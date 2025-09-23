import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">เนื้อหาหลักของหน้าเว็บ</h1>
        <p className="text-gray-600">
          นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar
          ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
        </p>
      </div>
    </div>
  );
}

export default App;