import ky from "ky";
const BASE_URL:string = import.meta.env.VITE_API_URL
type THttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export const HttpRequest= async (path:string, method:THttpMethod, body?:object):Promise<any> => {
    const API_URL = `${BASE_URL}${path}`
    try {
        const response = await ky(API_URL,{method, json: body});
        return response.json();
    }catch (error:any) {
        if (error.response) {
            const errorData = await error.response.json()
            throw new Error(errorData.message)
        }else {
            console.log('request error:',error.message)
        }
    }
}

export const get = (path:string):Promise<any> => HttpRequest(path, 'GET')
export const post = (path:string, body:object):Promise<any> => HttpRequest(path, 'POST', body )
export const put = (path:string, body:object):Promise<any> => HttpRequest(path, 'PUT', body)
export const patch = (path:string, body:object):Promise<any> => HttpRequest(path, 'PATCH', body)
export const del = (path:string):Promise<any> => HttpRequest(path, 'DELETE')