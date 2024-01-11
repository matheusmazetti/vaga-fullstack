import styled from "styled-components";

export const AddDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
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
      width: 380px;
      height: 21px;
      font-size: large;
      border: 1.5px solid gray;
			padding: 10px;
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

export const PageDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 120px;
		height: 70vh;
`;

export const SearchDiv = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70vw;

		.margintop{
			margin-top: 200px;
		}

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

export const LoadingDiv = styled.div`
	width: 100%;
	height: 100%;
`;

