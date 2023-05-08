import { useEffect } from "react"
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotals } from "./features/cart/cartSlice"

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      {isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
export default App
