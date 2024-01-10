import React from "react"
import styled from "styled-components";

//Função responsável pela criação dos botões de paginação da tabela
export default function Pagination({ range, setPage, page, slice }) {

  React.useEffect(() => {
    //Verificação para caso não exista conteudo em uma página e o usuário não esteja na primeira página, o botão da página vazia é removido
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage])

  return (
    //o array range é percorrido para criar os botões de paginação
    <PaginationGroup>
      {range.map((element, index) => {
        return (
          <button
          key={index}
          className={`${page === element ? 'activeButton' : 'inactiveButton'}`}
          onClick={() => {setPage(element)}}>
            {element}
          </button>
        )
      })}
    </PaginationGroup>
  )

}

const PaginationGroup = styled.div`
  background-color: #f1f1f1;
  padding: 8px 0px;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    border: none;
    padding: 7px 14px;
    border-radius: 10px;
    margin: 4px;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
  }

  .activeButton {
    color: white;
    background: #185adb;
  }

  .inactiveButton {
    color: #2c3e50;
    background: #f9f9f9;
  }
`