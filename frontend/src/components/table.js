import styled from "styled-components";
import React from "react";
import Pagination from "./pagination";
import { FaRegTrashAlt } from "react-icons/fa";
import useTable from "../hooks/useTable";

export default function Table({ data, rowsPerPage }) {
	console.log(data);
	const [page, setPage] = React.useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
	
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
								<td><FaRegTrashAlt /></td>
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

