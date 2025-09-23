// src/components/ProductCard.tsx
import React from 'react';

// กำหนดประเภทของ props ที่จะรับเข้ามา
interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void; // ฟังก์ชันที่จะทำงานเมื่อกดปุ่ม
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, price, onAddToCart }) => {
  return (
    // กรอบของการ์ด
    <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden">
      {/* รูปภาพสินค้า */}
      <div className="w-full overflow-hidden">
         <img className="w-full h-full object-contain p-4" src={imageUrl} alt={title} />
      </div>
      
      {/* เนื้อหาของการ์ด */}
      <div className="px-5 pb-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm my-2 flex-grow">{description}</p>
        
        {/* ส่วนราคาและปุ่ม */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-2xl font-bold text-gray-900">฿{price.toFixed(2)}</span>
          <button 
            onClick={onAddToCart}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;