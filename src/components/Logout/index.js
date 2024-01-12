// Write your code here
import './index.css'

const Logout = props => {
  const {changeStatus, btnText} = props
  return (
    <button className="btn-logout" type="button" onClick={changeStatus}>
      {btnText}
    </button>
  )
}
export default Logout
