import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";
import React from "react";
import axios from "axios";
import Table from "../components/table";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainPage() {
	const [searchInput, setSearchInput] = React.useState("");
	const [results, setResults] = React.useState([]);
	const [showTable, setShowTable] = React.useState(false);
	const [showLoading, setShowLoading] = React.useState(false);

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

	return (
		<>
			<PageDiv>
				<SearchDiv>
					<p>Digite os dados da busca</p>
					<div>
						<input type="text" onChange={(e) => { setSearchInput(e.target.value) }} />
						<IconContext.Provider value={{ color: "white", size: "20px" }}>
							<button className="button" onClick={() => { sendSearch() }}><FaMagnifyingGlass /></button>
						</IconContext.Provider>
					</div>
					{(showTable ? <Table data={results} rowsPerPage={10} setShowLoading={setShowLoading} setShowTable={setShowTable} sendSearch={sendSearch} /> : (showLoading ? <LoadingDiv><ReactLoading type="spin" width={150} color="#074ee8" /></LoadingDiv> : <></>))}
				</SearchDiv>
				<AddDiv>
					<p>Adicione novos produtos</p>
					<label for="name">Nome:</label>
					<input id="name" type="text" />
					<label for="ean">EAN:</label>
					<input id="ean" type="text" />
					<button className="addButton">Adicionar</button>
				</AddDiv>
				<ToastContainer />
			</PageDiv>
		</>

	);
}

const AddDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        margin-bottom: 10px;
        color: grey;
        font-size: larger;
        font-weight: 700;
    }

		label{
			text-align: left;
			font-weight: 700;
			color: grey;
			width: 400px;
		}

    input[type=text]{
			margin-top: 10px;
			margin-bottom: 10px;
      width: 400px;
      height: 40px;
      font-size: large;
      border: 1.5px solid gray;
      padding: 0;
      border-radius: 10px;
    }

    .addButton{
      height: 43px;
      width: 150px;
      border: 1px solid #074ee8;
      border-radius: 10px;
      background-color: #074ee8;
      padding: 0;
      color: white;
    }

    button:hover{
      cursor: pointer;
    }
`;

const PageDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
`;

const SearchDiv = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70vw;
		height: 70vh;

    p{
        margin: 0;
        margin-bottom: 10px;
        color: grey;
        font-size: large;
        font-weight: 700;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        input[type=text]{
            width: 380px;
            height: 21px;
            font-size: large;
            border: 1.5px solid gray;
            padding: 10px;
            border-radius: 10px 0 0 10px;
        }

        .button{
            height: 43px;
            width: 40px;
            border: 1px solid #074ee8;
            border-radius: 0 10px 10px 0;
            background-color: #074ee8;
            padding: 0;
            color: white;
            position: absolute;
            right: -15px;
        }

        button:hover{
            cursor: pointer;
        }

    }

`;

const LoadingDiv = styled.div`
	width: 100%;
	height: 100%;
`;
