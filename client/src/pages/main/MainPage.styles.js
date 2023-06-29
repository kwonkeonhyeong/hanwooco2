import styled from "@emotion/styled";

export const MainWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    width: 100dvw;
    `

export const ContentsWrapper = styled.div`
    position: fixed;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 420px;
`

export const TagContainerWrapper = styled.div`
    margin: 10px 0px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    width: 360px;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    border-radius: 25px;
`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 360px;
    height: 60px;
`

export const CowInputTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #FF0000;
`

export const CowInput = styled.input`
    width: 240px;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 2px;
`

export const WeightInput = styled.input`
    width: 240px;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 2px;
    ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
        margin: 0; 
        }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
        }    
`

export const TagTextPriceWrapper = styled.div`
    display: flex;
    width: 320px;
    margin: 10px 0px;
`

export const TagTextGradeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;
    margin: 10px 0px;
`
export const GradeCheckWrapper = styled.div`
    position: relative;
`

export const GradeCheck  = styled.div`
    position: absolute;
    top:-5px;
    left: 25px;
    width: 20px;
    height: 20px;
    border: 1px solid #FF0000;
    border-radius:25px;
`

export const Image = styled.img`
`
export const SubmitBtn = styled.button`
    margin: 20px 0px;
    width: 360px;
    height: 60px;
    border-radius: 15px;
    background: #FAFF00;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    font-size: 27px;
    font-weight: 400;
    letter-spacing: 10px;
    color: black;
`