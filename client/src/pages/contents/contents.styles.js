import styled from "@emotion/styled";

export const MainWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    `

export const BackgroundWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color: white;
    padding: 20px 0px;
    `

export const PurchaseCo2Wrapper = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    padding: 20px 0px;
    margin: 10px;
    border-radius: 25px;

    z-index: 1;

    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-image: url('/contentsBg2.jpg');
        background-size: cover;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.5;
        border-radius: 25px;
    }
`

export const PurchaseCo2Text = styled.div`
    font-size: 32px;
    letter-spacing: 1px;
    margin: 5px 30px;
    /* color:#7E9E6B; */
    color:black;
    height: 100%;
`

export const TreeWrapper = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    padding: 20px 0px;
    margin: 10px;
    border-radius: 25px;

    z-index: 1;

    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-image: url('/contentsBg1.jpg');
        background-size: cover;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.5;
        border-radius: 25px;
    }
`

export const Tree2Text = styled.div`
    font-size: 32px;
    letter-spacing: 1px;
    margin: 5px 30px;
    color:black;
    height: 100%;
`

export const CowImage = styled.img`
    position:absolute;
    height: 150%;
    top: -5px;
    right: -80px;
`

export const TreeImage = styled.img`
    position:absolute;
    width: 10%;
`

export const TextStrong = styled.strong`
    color: black;
`


export const TextSmall = styled.span`
    font-size: 24px;
    color: black;
`

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 20px;
    width: 90%;
    background-color: #F7FFF7;
    border-radius: 25px;
    border: 3px dashed black;
`

export const CommentText = styled.div`
    font-size: 18px;
    letter-spacing: 1px;
    margin: 5px 0px;
    /* height: 100%; */
`

export const AbattWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 20px;
    width: 90%;
    background-color: blue;
    border-radius: 25px;
`

export const AbattInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AbattInfo = styled.div`
    font-size: 16px;
    margin: 8px;
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