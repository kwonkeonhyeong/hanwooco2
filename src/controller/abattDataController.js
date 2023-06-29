import axios from "axios"
import dotenv from "dotenv";

dotenv.config();

export const getData = async (req, res) => {
    
    const { id } = req.params // -> 프론트 URL 에서 GET요청으로 개체번호 보낸거 받았음.
    
    let confirmApiError = false
    // 등급판정확인서 에러 체크 
    // false => api오류로 데이터가 아예 안날라 온 경우
    // true => 일단 data는 들어오긴 한 것

    let confirmData

    const key = process.env.API_SERVICE_KEY
    const BaseUrl = `http://data.ekape.or.kr/openapi-data/service/user/grade/confirm`

    try {
        // 공공데이터 API 등급판정확인서 데이터 요청
        const ConfirmUrl = `${BaseUrl}/issueNo?animalNo=${id}&ServiceKey=${key}`
        confirmData = await axios.get(ConfirmUrl)
        .then((res) => {
            const data = res?.data?.response?.body?.items?.item
            if (!data) { // 만일 데이터가 없는 경우 대비
                const data = undefined
                confirmApiError = true
                console.log("confirmdata does not exist.")
            } else {
                console.log(`ConfirmUrl-connection-success: ${ConfirmUrl}`)
            }
            return data
        }).catch((error) => {
            const data = undefined
            confirmApiError = true
            console.log("confirmApi axios error")
            console.log(error.message)
            return data // 프론트에 자체 에러메세지 전송 //
        });
        
    } catch (error) {
        // 아예 try 오류인 경우
        confirmData =  undefined;
        confirmApiError = true
        console.log("confirmApi get try error")
        console.log(error.message);
    }

    if(!confirmApiError){
        
        const issueNo = confirmData.issueNo.split(' ').join('')
        const issueDate = confirmData.issueDate.split(' ').join('')
        
        let gradeData

        try {
            const GradeUrl= `${BaseUrl}/cattle?issueNo=${issueNo}&issueDate=${issueDate}&ServiceKey=${key}`
            gradeData = await axios.get(GradeUrl)
            .then((res) => {
                const data = res?.data?.response?.body?.items?.item
                if (!data){
                    console.log("confirmdata does not exist.")
                } else {
                    console.log(`GradeUrl-connection-success: ${GradeUrl}`)
                }
                return data
                }
            );
        } catch (error) {
            console.log("Greader")
            console.log(error.message);
            gradeData = undefined
        }
        return res.json(gradeData)

    }

    return res.json(confirmData)
}