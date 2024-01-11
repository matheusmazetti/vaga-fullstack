import styled from "styled-components"

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin {
    margin-top: 35px;
  }

  img{
    width: 350px;
  }

  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label{
			text-align: left;
			font-weight: 700;
			color: grey;
			width: 400px;
		}

    input{
			margin-top: 10px;
			margin-bottom: 10px;
      width: 380px;
      height: 21px;
      padding: 10px;
      font-size: large;
      border: 1.5px solid gray;
      border-radius: 10px;
    }

    button{
      height: 43px;
      width: 150px;
      border: 1px solid #074ee8;
      border-radius: 10px;
      background-color: #074ee8;
      padding: 0;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button:hover{
      cursor: pointer;
    }
  }

  .buttons{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`