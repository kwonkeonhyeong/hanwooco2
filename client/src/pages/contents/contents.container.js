import { useLocation, useNavigate } from "react-router-dom"
import ContentsPageUI from "./contents.presenter"
import ScrollToTop from "../../component/ScrollTop";
import ContentsGlobalStyles from "../../styles/ContentsGlobalStyles";
import { useEffect, useState } from "react";


function ContentsPage() {

    const location = useLocation();

    const navigate = useNavigate();
    
    const {data} = location.state;
    const {purchaseWeight} = location.state;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
    let meanCow
    let commentResult

    const co2Calculation = (birthmonth, weight, purchaseWeight) => {
        
        const co2Result = {};
    
        const kgCo2 = Math.round(((Number(birthmonth)*198.2)/Number(weight)) * 1000)/1000
        const PurchaseCo2 = Math.round((kgCo2*(Number(purchaseWeight)/1000))*1000)/1000
        const TreeCo2 = Math.round((Number(0.00716)*PurchaseCo2)*1000)/1000
            
        co2Result.kgCo2 = kgCo2
        co2Result.PurchaseCo2 = PurchaseCo2
        co2Result.TreeCo2 = TreeCo2
    
        return co2Result
    }

    const isCompareCo2 = () => {

        const comment = {}   
        let PurchaseCo2
        let Tree
        // let isIncrease

        if (Number(searchCow.PurchaseCo2) > Number(meanCow.PurchaseCo2)){
            PurchaseCo2 = Math.round(Number((searchCow.PurchaseCo2) - Number(meanCow.PurchaseCo2))*1000)/1000
            comment.PurchaseCo2 = PurchaseCo2

            Tree = Math.round(Number((searchCow.TreeCo2) - Number(meanCow.TreeCo2))*1000)/1000
            comment.Tree = Tree

            comment.isIncrease = 1;
        } 
        
        if (Number(searchCow.PurchaseCo2) < Number(meanCow.PurchaseCo2)){
            PurchaseCo2 = Math.round(Number((meanCow.PurchaseCo2) - Number(searchCow.PurchaseCo2))*100)/100
            comment.PurchaseCo2 = PurchaseCo2

            Tree = Math.round(Number((meanCow.TreeCo2) - Number(searchCow.TreeCo2))*1000)/1000
            comment.Tree = Tree

            comment.isIncrease = 0
        }

        return comment
    }

    
    const searchCow = co2Calculation(data.birthmonth, data.weight, purchaseWeight)

    if (data.judgeSexNm === "수") {
        meanCow = co2Calculation(29, 424, purchaseWeight)
        commentResult = isCompareCo2()
    } 
    
    if (data.judgeSexNm === "거세") {
        meanCow = co2Calculation(31, 462, purchaseWeight)
        commentResult = isCompareCo2()
    } 
    
    if (data.judgeSexNm === "암") {
        meanCow = co2Calculation(57, 366, purchaseWeight)
        commentResult = isCompareCo2()
    }

    if (data.judgeSexNm.includes("기타")) {
        meanCow = co2Calculation(57, 366, purchaseWeight)
        commentResult = isCompareCo2()
    }


    const onClickMainPage = async () => {
            navigate("/");             
    }
    return (
        <>  
            <ScrollToTop/>
            <ContentsGlobalStyles />
            <ContentsPageUI 
                data={data} 
                weight={purchaseWeight} 
                searchCow={searchCow} 
                meanCow={meanCow}
                comment={commentResult}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                onClickMainPage={onClickMainPage}
            />
        </>
    )
}

export default ContentsPage;