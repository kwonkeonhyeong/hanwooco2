import * as S from "./MainPage.styles"
import LoadingComponent from "../../component/Loading";

function MainPageUI(props) {

    return (
        <S.MainWrapper>
            {props.loading ? <LoadingComponent /> : null}
            <S.ContentsWrapper>
                <div style={{fontSize: "48px", margin: "20px 0px", letterSpacing: "2px"}}>한우 탄소 계산기</div>
                <div style={{fontSize: "27px", margin: "5px 0px"}}>구입하신 한우의</div>
                <div style={{fontSize: "27px", margin: "10px 0px"}}>이력번호와 중량을 입력하세요</div>
                <S.TagContainerWrapper>   
                    <div style={{fontSize: "27px", letterSpacing: "3px", marginBottom: "5px"}}>한우꽃등심(냉장)</div>
                    <div style={{fontSize: "16px", marginBottom: "10px", letterSpacing: "2px"}}>원산지: 국내산, 용도: 구이용</div>
                    <S.InputWrapper  style={{backgroundColor:"#FAFF00"}}>
                        <S.CowInputTitleWrapper>
                            <div style={{fontSize: "16px", letterSpacing: "2px"}}>이력번호</div>
                            <div style={{fontSize: "16px", letterSpacing: "1px"}}>(묶음번호)</div>
                        </S.CowInputTitleWrapper>
                        <S.CowInput type="text" placeholder="이력번호를 입력해주세요." onChange={props.onChangeID}></S.CowInput>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div style={{fontSize: "16px", letterSpacing: "3px"}}>중량(g)</div>
                        <S.WeightInput type="number" placeholder="중량을 입력해주세요" onChange={props.onChangeWeight}></ S.WeightInput>
                    </S.InputWrapper>
                    {/* <S.TagTextPriceWrapper>
                        <div style={{fontSize: "16px", color: "#FF0000"}}>100g 당 (원)</div>
                        <div style={{fontSize: "16px", marginLeft: "10px"}}>19,850</div>
                    </S.TagTextPriceWrapper> */}
                    <S.TagTextGradeWrapper>
                        <S.GradeCheckWrapper>
                            <span style={{display: "inline-block",fontSize: "12px"}}>등급: 1++,1+,1,2,3,등외</span>
                            <S.GradeCheck></S.GradeCheck>
                        </S.GradeCheckWrapper>
                        <div style={{fontSize: "12px"}}>도축일자: 2023-06-21</div>
                        <div style={{fontSize: "12px"}}>사육자:홍길동</div>
                    </S.TagTextGradeWrapper>
                    <S.Image src="/barcode.png" alt="barcode_image"></S.Image>
                </S.TagContainerWrapper>    
                <S.SubmitBtn type="button" onClick={props.onClickSubmit}> 계산하기</S.SubmitBtn>
            </S.ContentsWrapper>
        </S.MainWrapper>
    )
}

export default MainPageUI;