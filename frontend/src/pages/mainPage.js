import Header from "../components/header"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";
import React from "react";
import axios from "axios";
import Table from "../components/table";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageDiv, SearchDiv, LoadingDiv, AddDiv } from "../styles/MainPageStyle";

export default function MainPage() {
	const [searchInput, setSearchInput] = React.useState("");
	const [results, setResults] = React.useState([]);
	const [showTable, setShowTable] = React.useState(false);
	const [showLoading, setShowLoading] = React.useState(false);
	const [name, setName] = React.useState("");
	const [ean, setEan] = React.useState("");

	function sendSearch() {
		setShowTable(false);
		setShowLoading(true);
		let stringCheck = searchInput.replace(/\s/g, '');
		if (stringCheck.length === 0) {
			//Envia um request getall
			const allRequest = axios.get("http://localhost:8080/api/getall");
			allRequest.then((response) => {
				setResults(response.data);
				setShowTable(true);
				setShowLoading(false);
			})
			allRequest.catch((error) => {
				console.log(error);
				setShowLoading(false);
				toast.error('Erro ao consultar dados', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			})
		} else {
			//Envia um request get
			const searchRequest = axios.get(`http://localhost:8080/api/get?query=${searchInput}`);
			searchRequest.then((response) => {
				setResults(response.data);
				setShowTable(true);
				setShowLoading(false);
			})
			searchRequest.catch((error) => {
				console.log(error);
				setShowLoading(false);
				toast.error('Erro ao consultar dados', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			})
		}
	}

	function addItem() {
		let checkName = name.replace(/\s/g, '');
		if(checkName.length === 0){
			toast.error('Preencha corretamente o nome do produto', {
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

		let checkEan = ean.replace(/\s/g, '');
		if(checkEan.length === 0) {
			toast.error('Preencha corretamente o EAN do produto', {
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

		let addData = {
			name: name,
			ean: ean
		}

		const addReq = axios.post("http://localhost:8080/api/create", addData)

		addReq.then((response) => {
			setEan("");
			setName("");
			sendSearch();
			toast.success('Item adicionado com sucesso', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				});
		})

		addReq.catch((error) => {
			console.log(error);
			if(error.response.status === 409) {
				toast.error('EAN já cadastrado', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			} else {
				toast.error('Erro ao adicionar o produto', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			}
			sendSearch();
		})



	}

	return (
		<>
			<Header />
			<PageDiv>
				<SearchDiv>
					<p>Digite os dados da busca</p>
					<div>
						<input type="text" onChange={(e) => { setSearchInput(e.target.value) }} />
						<IconContext.Provider value={{ color: "white", size: "20px" }}>
							<button className="button" onClick={() => { sendSearch() }}><FaMagnifyingGlass /></button>
						</IconContext.Provider>
					</div>
					{(showTable ? <Table data={results} rowsPerPage={10} setShowLoading={setShowLoading} setShowTable={setShowTable} sendSearch={sendSearch} /> : (showLoading ? <LoadingDiv><ReactLoading type="spin" width={150} color="#074ee8" className="margintop" /></LoadingDiv> : <></>))}
				</SearchDiv>
				<AddDiv>
					<p>Adicione novos produtos</p>
					<label for="name">Nome:</label>
					<input id="name" type="text" onChange={(e) => {setName(e.target.value)}} value={name} />
					<label for="ean">EAN:</label>
					<input id="ean" type="text" onChange={(e) => {setEan(e.target.value)}} value={ean} />
					<button className="addButton" onClick={() => {addItem()}} >Adicionar</button>
				</AddDiv>
				<ToastContainer />
			</PageDiv>
		</>

	);
}


