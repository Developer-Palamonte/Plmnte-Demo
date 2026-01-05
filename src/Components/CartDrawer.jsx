import { useCart } from "../context/CartContext";

function CartDrawer() {
  const { items, open, setOpen, updateQty, removeItem, toast } = useCart();

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white shadow-md rounded-lg px-6 py-3 flex gap-2 items-center">
          <span className="text-green-600">✔</span>
          <span className="text-sm">{toast}</span>
        </div>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-[380px] bg-white
        transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b px-5 py-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#fbfaf5] rounded-xl p-4 flex gap-4"
            >
              <img
                src={item.img}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.pack}</p>
                <p className="text-sm mb-2">{item.price}</p>

                <div className="flex items-center gap-3 text-lg">
                  <button className="cursor-pointer" onClick={() => updateQty(index, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button className="cursor-pointer" onClick={() => updateQty(index, 1)}>+</button>
                </div>
              </div>

              <button
                onClick={() => removeItem(index)}
                className="text-red-500 cursor-pointer"
              >
                🗑
              </button>
            </div>
          ))}

          {items.length === 0 && (
            <p className="text-center text-gray-500">Cart is empty</p>
          )}
        </div>

        <button className="cursor-pointer absolute bottom-4 left-4 right-4 bg-green-500 text-white py-3 rounded-full">
          Order via WhatsApp
        </button>
      </div>
    </>
  );
}

export default CartDrawer;
