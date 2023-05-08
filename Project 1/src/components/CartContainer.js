import { clearCart } from "../features/cart/cartSlice"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"

const CartContainer = () => {
  const dispatch = useDispatch()

  const { cartItems, total, amount } = useSelector((store) => store.cart)

  if (amount < 1) {
    return <h4>Your cart is empty</h4>
  }
  return (
    <section className="cart">
      <h3>your cart</h3>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>
        })}
      </div>
      <footer>
        <h4>total: {total}</h4>
        <button className="btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
