import { ChevronDown, ChevronUp } from "../icons"
import { useDispatch } from "react-redux"
import { removeItem, changeItemAmount } from "../features/cart/cartSlice"

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <h3>Price: {price}</h3>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          delete
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch(changeItemAmount({ id, direction: "increase" }))
          }
        >
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return
            }
            dispatch(changeItemAmount({ id, direction: "decrease" }))
          }}
        >
          <ChevronDown></ChevronDown>
        </button>
      </div>
    </article>
  )
}

export default CartItem
