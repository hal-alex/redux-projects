import { CartIcon } from "../icons"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart)

  return (
    <nav>
      <div style={{ background: "white" }}>
        Total amount of items in cart: {amount}
      </div>
    </nav>
  )
}

export default Navbar
