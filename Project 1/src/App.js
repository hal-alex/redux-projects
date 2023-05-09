import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotals, fetchCartItems } from "./features/cart/cartSlice"

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading</h2>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
export default App
