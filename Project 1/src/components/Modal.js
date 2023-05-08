import { closeModal } from "../features/cart/modal/modalSlice"
import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items?</h4>
        <button
          className="btn"
          onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
          }}
        >
          yes
        </button>
        <button className="btn" onClick={() => dispatch(closeModal())}>
          no
        </button>
      </div>
    </aside>
  )
}

export default Modal
