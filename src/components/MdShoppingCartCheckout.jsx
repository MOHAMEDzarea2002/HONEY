import {  useState } from 'react';
import { useCart } from '../Hooks/useCart';
export default function MdShoppingCartCheckout({ isOpen, onClose, onSubmitAction }) {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  // Context Cart
  const { setCart } = useCart();

  if (!isOpen) return null;

  const handleChangeData = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSub = (e) => {
    e.preventDefault();
    onSubmitAction(formData);
    onClose();
    setFormData({ name: '', phone: '', address: '' });
    setCart([]);
  };

  const idFromInput =
    formData.name.trim() === '' || formData.phone.trim() === '' || formData.address.trim() === '';
    
  return (
    <div
      className=" fixed w-full h-full inset-0  flex justify-center items-center  align-items-center bg-black/70 "
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white p-4 rounded-lg "
      >
        <div className="mb-3 flex justify-between items-center">
          <div>
            <h2 className="text-2xl">إتمام الطلب</h2>
            <p className="text-sm">برجاء إدخال بيناتك لتأكيد الطلب</p>
          </div>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            X
          </button>
        </div>
        <form className="w-full max-w-sm mx-auto" onSubmit={handleSub}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            الاسم بالكامل
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            required
            type="text"
            placeholder="أسمك"
            value={formData.name}
            onChange={handleChangeData}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="phone">
            رقم الهاتف
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            required
            type="text"
            placeholder="رقم الهاتف (مثال: 01012345678)"
            value={formData.phone}
            onChange={handleChangeData}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="address">
            العنوان بالتفصيل
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            required
            type="text"
            value={formData.address}
            placeholder="المحافظة - المدينة - الشارع - رقم العقار"
            onChange={handleChangeData}
          />

          <button
            type="submit "
            className=" p-2 bg-blue-500 text-white rounded-sm
          my-2
          cursor-pointer
          "
            disabled={idFromInput}
          >
            تأكيد وشحن الآن
          </button>
        </form>
      </div>
    </div>
  );
}
