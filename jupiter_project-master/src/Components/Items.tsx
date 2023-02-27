import React from "react";

interface Props {
  productItems: any;
  handleChange: any;
  searchItem: string;
  jupitorInfo: any;
}

export const Items: React.FC<Props> = ({
  productItems,
  handleChange,
  searchItem,
  jupitorInfo,
}) => {
  return (
    <section className="section">
      <div>
        <div className="items">
          {jupitorInfo
            ?.filter((productItems: any) => {
              if (searchItem === "") {
                return productItems;
              } else if (
                productItems.name
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              ) {
                return productItems;
              }
            })
            .map((productItems: any, key: any) => (
              <div className="card">
                <div>
                  <div>
                    <img
                      className="image"
                      src={productItems.imageUrl}
                      alt={productItems.name}
                    />
                  </div>
                  <div>
                    <h3 className="product-name">{productItems?.name}</h3>
                  </div>
                  <div className="product-price">${productItems?.price}</div>
                  <button
                    className="productButton"
                    onClick={() => handleChange(productItems)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
