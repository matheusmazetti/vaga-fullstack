import React from "react"
import { PaginationGroup } from "../styles/ComponentsStyles";

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
