import React from "react";

//Função para calcular e retornar as páginas da tabela
const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++){
    range.push(i);
  }

  return range
}

//Função para separar os dados por página
const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page-1)*rowsPerPage, page*rowsPerPage)
}

//Função para criação da tabela
const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = React.useState([]);
  const [slice, setSlice] = React.useState([]);

  //useEffect para monitorar mudanças nos dados 
  React.useEffect(()=>{
    //Atualizando a paginação
    const range = calculateRange(data, rowsPerPage);
    setTableRange(range)

    //Atualizando a separação de dados
    const slice = sliceData(data, page, rowsPerPage);
    setSlice(slice);

  },[data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };

}

export default useTable