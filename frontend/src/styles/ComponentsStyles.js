import styled from "styled-components";

export const MainDiv = styled.div`
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    background-color: white;
    align-items: center;
    height: 10%;
    width: 100%;
    position: fixed;
    box-shadow: 0px 0px 30px 4px rgba(0,0,0,0.51);
    top: 0;
    right: 0;

    p{
        margin-left: 15px;
        font-size: 20px;
        font-weight: 700;
    }
`

export const PaginationGroup = styled.div`
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

export const CustomTable = styled.table`
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