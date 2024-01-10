import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";
import React from "react";
import axios from "axios";
import Table from "../components/table";

export default function MainPage() {
	const [searchInput, setSearchInput] = React.useState("");

	function sendSearch() {
		let stringCheck = searchInput.replace(/\s/g, '');
		if (stringCheck.length === 0) {
			//Envia um request getall
			const allRequest = axios.get("http://localhost:8080/api/getall");
			allRequest.then((response) => {
				console.log(response);
			})
		} else {
			//Envia um request get
			const searchRequest = axios.get(`http://localhost:8080/api/get?query=${searchInput}`);
			searchRequest.then((response) => {
				console.log(response);
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
							<button onClick={() => { sendSearch() }}><FaMagnifyingGlass /></button>
						</IconContext.Provider>
					</div>
					<Table />
				</SearchDiv>
			</PageDiv>
		</>

	);
}

const PageDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
`

const SearchDiv = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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
            width: 400px;
            height: 40px;
            font-size: large;
            border: 1.5px solid gray;
            padding: 0;
            border-radius: 10px 0 0 10px;
        }

        button{
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
`
