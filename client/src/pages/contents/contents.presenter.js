import * as S from "./contents.styles"

function ContentsPageUI(props) {
    
    return (
        <S.MainWrapper >
            <S.BackgroundWrapper style={props.windowWidth<420 ? {width: `${props.windowWidth}px`} : {width: "420px"}}>
                <S.PurchaseCo2Wrapper>
                    <S.PurchaseCo2Text>
                        조회한 한우
                    </S.PurchaseCo2Text>
                    <S.PurchaseCo2Text style={{position: "relative"}}>
                        {props.weight}g의
                    </S.PurchaseCo2Text>
                    <S.PurchaseCo2Text>탄소배출량은 </S.PurchaseCo2Text>
                    <S.PurchaseCo2Text>{props.searchCow.PurchaseCo2}<S.TextSmall>kg</S.TextSmall>입니다</S.PurchaseCo2Text>
                </S.PurchaseCo2Wrapper>
                <S.TreeWrapper style={{alignItems: "flex-end", backgroundColor: "white"}}>
                    <S.Tree2Text>해당 탄소를</S.Tree2Text>
                    <S.Tree2Text>흡수하기 위해</S.Tree2Text>
                    <S.Tree2Text>{props.searchCow.TreeCo2} 그루의</S.Tree2Text>
                    <S.Tree2Text style={{position: "relative"}}>
                        소나무가 필요합니다
                    </S.Tree2Text>
                </S.TreeWrapper>
                

                <S.CommentWrapper>                      
                    <S.CommentText style={{fontSize: "24px"}}>[한우 {props.weight}g 기준]</S.CommentText>
                    <S.CommentText>탄소발생량 전국 평균: {props.meanCow.PurchaseCo2}kg</S.CommentText>
                    <S.CommentText>구매한 한우의 탄소발생량은</S.CommentText>
                    <S.CommentText>
                        전국평균 보다 약 {props.comment.PurchaseCo2}kg {props.comment.includes ? "낮으며" : "높으며"}
                    </S.CommentText>
                    <S.CommentText>소나무 {props.comment.Tree}{props.comment.includes ? "그루가 절약됩니다." : "그루가 더 필요합니다."}</S.CommentText>

                    <S.AbattInfo style={{fontSize: "24px", marginTop: "20px"}}>[ 한우 상세 정보 확인하기 ]</S.AbattInfo>
                    <S.AbattInfo>이력번호: {props.data.cattleNo}</S.AbattInfo>
                    <S.AbattInfo>도축일자: {props.data.abattDate}</S.AbattInfo>
                    <S.AbattInfoWrapper>
                        <S.AbattInfo>품종: {props.data.judgeBreedNm}</S.AbattInfo>
                        <S.AbattInfo>성별: {props.data.judgeSexNm}</S.AbattInfo>
                    </S.AbattInfoWrapper>
                    <S.AbattInfoWrapper>    
                        <S.AbattInfo>도축개월령: {props.data.birthmonth}</S.AbattInfo>
                        <S.AbattInfo>등급: {props.data.gradeNm}</S.AbattInfo>
                    </S.AbattInfoWrapper>    
                    <S.AbattInfoWrapper>
                        <S.AbattInfo>도체중: {props.data.weight}</S.AbattInfo>
                        <S.AbattInfo>등심단면적: {props.data.rea}</S.AbattInfo>
                    </S.AbattInfoWrapper>
                    <S.AbattInfoWrapper>
                        <S.AbattInfo>등지방두께: {props.data.backfat}</S.AbattInfo>
                        <S.AbattInfo>근내지방도: {props.data.insfat}</S.AbattInfo>
                    </S.AbattInfoWrapper>
                    <S.AbattInfo>[판매업체주소]</S.AbattInfo>
                    <S.AbattInfo>{props.data.reqAddr}</S.AbattInfo>
                    <S.AbattInfo>[판매업체명]</S.AbattInfo>
                    <S.AbattInfo>{props.data.reqComNm}</S.AbattInfo>
                </S.CommentWrapper>        
                <S.SubmitBtn type="button" onClick={props.onClickMainPage}>다시계산하기</S.SubmitBtn>
            </S.BackgroundWrapper>
        </S.MainWrapper>
    )
}

export default ContentsPageUI;