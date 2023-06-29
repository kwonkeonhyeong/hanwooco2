// import {useEffect} from "react"
import MainPageUI from "./MainPage.presenter"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MainGlobalStyles from "../../styles/MainGlobalStyles";
import ScrollToTop from "../../component/ScrollTop";
// import LoadingComponent from "../../component/Loading";

function MainPage() {
    
    const navigate = useNavigate();

    const [id, setID] = useState("")
    const [weight, setWeight] = useState("")

    const [loading, setLoading] = useState(false);

    let abattData
    
    const getApi = async () => {
        setLoading(true)
        await axios.get(`/api/${id}`)
        .then((res) => {
            if(res.status !== 404) {
                console.log("데이터 전송에 성공했습니다.")
                console.log(res)
                abattData = res?.data
                console.log(abattData)
            }
            setLoading(false)
        }).catch(err => {
            // 에러 처리
            setLoading(false)
            console.log(err.response.data.message); // --> 서버단 에러메세지 출력~
        });
    }

    const onClickSubmit = async () => {

        if (!id && !weight) {
            alert("개체번호와 중량을 입력해주세요.")
            return
        } else if(!id) {
            alert("개체번호를 입력해주세요.")
            return
        } else if (!weight) {
            alert("중량을 입력해주세요.")
            return
        } else if (Number(weight) < 100) {
            alert("100g이상 입력해주세요.")
            return
        }

        await getApi()
        console.log(abattData)
        if (!abattData){
            alert("개체번호를 다시 입력해주세요.")
        } else {
            navigate("/newpage", { state: { data:abattData, purchaseWeight: weight} });      
        }
    }

    const onChangeID = (event) => {
        setID(event.target.value)
    }
    
    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    return (
        <>  
            <ScrollToTop />
            <MainGlobalStyles />
            <MainPageUI 
                onClickSubmit={onClickSubmit}
                onChangeID={onChangeID}
                onChangeWeight={onChangeWeight}
                loading={loading}
            />
        </>
    )
}

export default MainPage;