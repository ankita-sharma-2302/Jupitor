import React from "react";

interface Props {
  cartItems: any;
  handleChange: any;
  handleDelete: any;
  jupitorInfo: any;
}

export const Cart: React.FC<Props> = ({
  cartItems,
  handleChange,
  handleDelete,
}) => {
  console.log("iiiiiiiii", cartItems);
  const totalPrice = cartItems.reduce(
    (price: number, item: { quantity: number; price: number }) =>
      price + item.quantity * item.price,
    0
  );
  return (
    <section className="section">
      <div className="cart">
        <div className="cart1">
          <h1>Selected Items</h1>
        </div>
        {cartItems.length === 0 && (
          <div className="emptycart">
            <h3>No Items are Added in the Cart </h3>
          </div>
        )}
        <div>
          {cartItems.map((item: any) => (
            <section>
              <div key={item.productId} className="cartlist">
                <img
                  className="cartselectList"
                  src={item.imageUrl}
                  alt={item.name}
                />

                <div className=".cartlist-name">{item.name}</div>
                <div className="cartlist-function">
                  <button
                    className="add-item"
                    onClick={() => handleChange(item)}
                  >
                    +
                  </button>
                  <button
                    className="delete-item"
                    onClick={() => handleDelete(item)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                  <div className="price">
                    {item.quantity}*${item.price}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="total-price">
          total price
          <div className="price-total">${totalPrice}</div>
        </div>
      </div>
    </section>
  );
};
