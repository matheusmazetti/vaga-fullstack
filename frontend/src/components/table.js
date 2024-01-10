import styled from "styled-components";
import React from "react";
import Pagination from "./pagination";
import { FaRegTrashAlt } from "react-icons/fa";
import useTable from "../hooks/useTable";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Table({ data, rowsPerPage, setShowLoading, setShowTable, sendSearch }) {
	const [page, setPage] = React.useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

	function deleteItem(id) {
		setShowTable(false);
		setShowLoading(true);
		const deleteReq = axios.post(`http://localhost:8080/api/delete/${id}`)
		deleteReq.then((response) => {
			sendSearch()
			toast.success('Item excluído com sucesso', {
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
		deleteReq.catch((error) => {
			console.log(error);
			toast.error('Erro ao excluir o item', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			sendSearch()
		})
	}
	
	//Percorre o slice (dados paginados) para colocar na tabela
	return (
		<>
			<CustomTable>
				<thead>
					<tr>
						<th>EAN</th>
						<th>Nome</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{slice.map((element) => {
						return (
							<tr key={element.id}>
								<td>{element.ean}</td>
								<td>{element.name}</td>
								<td><FaRegTrashAlt onClick={() => {deleteItem(element.id)}} /></td>
							</tr>
						)
					})}
				</tbody>
			</CustomTable>
			<Pagination range={range} slice={slice} setPage={setPage} page={page} />
		</>	
	);
}


const CustomTable = styled.table`
	border-collapse: collapse;
  border: none;
  width: 100%;
	height: 100%;
	margin-top: 20px;

	thead{
		background-color: transparent;
  	transition: all 0.25s ease;
  	border-radius: 10px;
	}

	th{
		background-color: #f1f1f1;
		padding: 12px;
		font-weight: 500;
		text-align: left;
		font-size: 14px;
		color: #2c3e50;
	}

	td{
		padding: 12px;
  	font-size: 14px;
  	color: grey;
	}

`


