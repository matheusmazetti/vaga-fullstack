import { FullPage } from "../styles/LoginStyle"
import logo from "../assets/v360logo.jpg"
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

export default function SignupPage() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate();
  function signup() {
    setLoading(true);
    let data = {email: email, senha: password}
    let loginReq = axios.post("http://localhost:8080/api/user/signup", data)
    loginReq.then(response => {
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/");
    });
    loginReq.catch(error => {
      setLoading(false);
      if(error.response.status === 409) {
        toast.error('Email já cadastrado', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
        return
      } else {
        toast.error('Não foi possível realizar o cadastro', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
        return
      }
    })
  }

  return (
    <FullPage>
      <img src={logo} alt="V360 Logo" />
      <div className="form">
        <label>E-Mail</label>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <label>Senha</label>
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} />
        <div className="buttons">
          <button onClick={() => {signup()}}>{(loading ? <ReactLoading type="spin" width={30} color="white" className="margin" /> : "Cadastrar")}</button>
        </div>
      </div>
      <ToastContainer />
    </FullPage>
  )
}
