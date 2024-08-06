import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

    const {getItemQuantity, addItem, removeItem, removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="flex-col shadow rounded-md">
      <img src={imgUrl} alt={name} className="w-48 h-48 object-cover p-4" />
      <div className="ml-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="flex py-2 px-4">
        {quantity === 0 ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addItem()}>
            Add to Cart
          </button>
        ) : (
          <div className="flex-col">
            <div className="flex p-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeItem()}>
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addItem()}>
                +
              </button>
            </div>
            <div className="flex px-2">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromCart()}>
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
