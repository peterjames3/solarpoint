import { useNavigate } from "react-router-dom"

function OrderNow() {
  let navigate = useNavigate();
  const handleOrderNowClick = () => {
    navigate('/contact')
  }
  return (
    <div>
      <button onClick={handleOrderNowClick}type="submit" className="btn font-semibold hover:text-white transition-all delay-300">Order Now</button>
    </div>
  )
}

export default OrderNow
