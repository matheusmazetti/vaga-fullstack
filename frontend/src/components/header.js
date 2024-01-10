import styled from "styled-components";

export default function Header() {
    return (
        <>
            <MainDiv>
                <p>Catálogo de Leite</p>
            </MainDiv>
        </>
    )
}

const MainDiv = styled.div`
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