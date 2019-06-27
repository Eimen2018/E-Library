import React from "react";

export default function Card({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-around">
        <div className="cart-img-container w-25">
          <img src={img} alt="" className="card-img-left w-100" />
        </div>
        <div className="cart-info-container">
          <h5 className="card-title">
            {title.length > 15 ? title.substring(0, 12) + "..." : title}
          </h5>
          <h6 className="card-subtitle">Price: ${price}</h6>
          <div className="quantity my-2">
            <button
              className="btn btn-sm btn-outline-secondary mr-2"
              onClick={() => decrement(id)}
            >
              -
            </button>
            <button className="btn btn-sm btn-outline-secondary mr-2" disabled>
              {count}
            </button>
            <button
              className="btn btn-sm btn-outline-secondary mr-2"
              onClick={() => increment(id)}
            >
              +
            </button>
          </div>
          <h6 className="my-2">Total: ${total}</h6>
          <button className=" btn btn-outline-danger border-0 btn-sm card-remove-button text-capitalize" onClick={()=>removeItem(id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
