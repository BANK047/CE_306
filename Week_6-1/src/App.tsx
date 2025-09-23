// src/App.tsx
import React from 'react';
import ProductCard from './components/ProductCard';

// สมมติว่านี่คือข้อมูลสินค้าของคุณ
const productData = [
  {
    id: 1,
    title: 'Tactical boots',
    description: 'Armors',
    price: 29000,
    imageUrl: 'https://www.galls.com/photos/styles/FT1225_BLK_1500_1.JPG',
  },
  {
    id: 2,
    title: 'หูฟังไร้สาย',
    description: 'isuper evo bud 3',
    price: 999,
    imageUrl: 'https://image.makewebeasy.net/makeweb/m_1920x0/mpos6RYtA/BGWHITE/w_buds3_03.webp?v=202405291424',
  },
  {
    id: 3,
    title: 'Smart Watch',
    description: 'Garmin',
    price: 5000,
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.m6pd-Y3gLRSivW3qYuhtJwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
];

const App: React.FC = () => {
  // ฟังก์ชันที่จะทำงานเมื่อกดปุ่ม "Add to Cart"
  const handleAddToCartClick = (productTitle: string) => {
    alert(`เพิ่ม "${productTitle}" ลงในตะกร้าเรียบร้อย!`);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          รายการสินค้าของเรา
        </h1>

        {/* ตารางจัดวางสินค้าแบบ Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={() => handleAddToCartClick(product.title)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default App;