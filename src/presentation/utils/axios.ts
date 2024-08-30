import axios, {AxiosInstance } from "axios";
type httpMethod='POST'|'GET'|'PUT'|'DELETE'|'OPTIONS'
type httpData={
    url:string
    method:httpMethod
    body?:object
    params?:object
}
const axiosApiInstance: AxiosInstance=axios.create({
    baseURL:'https://66d16e3c62816af9a4f39991.mockapi.io/ipf-msa-productosfinancieros/bp',
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }

})
export default function httpClient(data: httpData){
    axiosApiInstance.interceptors.request.use(
        (config)=>{
            config.params=data.params
            return config
        },
        (error)=>{
            return Promise.reject(error)
        }
    )
    switch(data.method)
    {
        case "POST":
            return axiosApiInstance.post(data.url,JSON.stringify(data.body))
        case "GET":
            return axiosApiInstance.get(data.url)
        case "PUT":
            return axiosApiInstance.put(data.url,JSON.stringify(data.body))
        case "DELETE":
            return axiosApiInstance.delete(data.url)
        case "OPTIONS":
            return axiosApiInstance.options(data.url)
    }
}