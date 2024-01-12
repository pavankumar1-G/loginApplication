// Write your code here
import './index.css'

const Login = props => {
  const {changeStatus, btnText} = props
  return (
    <button className="btn-login" type="button" onClick={changeStatus}>
      {btnText}
    </button>
  )
}
export default Login
