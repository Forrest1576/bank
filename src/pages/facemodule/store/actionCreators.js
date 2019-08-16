import * as constants from './constants'
import axios from 'axios'
const Identify=(data)=>({
    type:constants.FACEIDENTIFY,
    data:(data),//将数据变为immutable类型传递,
})
export const FaceIdentify=()=>{
    axios.defaults.headers.post['Content-Type']='application/json'
    let url='https://api-cn.faceplusplus.com/facepp/v3/compare'
    let key='_DABPSxs2xM0kNEXHuwsd2opQrlbz3Nv'
    let secret='4rZKyvoMt19xqcci66JhWMr72TB4Dbw5'
    let url1='D:/大学毕业照片/test2.jpg'
    let url2='D:/大学毕业照片/test2.jpg'
    return(dispatch)=>{
        axios.post(url,{
            api_key:key,
            api_secret:secret,
            image_url1:url1,
            image_url2:url2
        }       
        ).then((res)=>{
            const result=res.data;
            console.log(result)
                dispatch(Identify(result))           
        }).catch((error)=>{
            alert('查询失败，请检查服务器')
        });

    }
}


