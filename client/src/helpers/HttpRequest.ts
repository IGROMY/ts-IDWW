import ky from "ky";
const BASE_URL:string = import.meta.env.VITE_API_URL;
type THttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}
export const HttpRequest = async <T = unknown>(
    path: string,
    method: THttpMethod,
    body?: object
): Promise<ApiResponse<T>> => {
    const API_URL = `${BASE_URL}${path}`;
    try {
        const response = await ky(API_URL, { method, json: body });
        return response.json();  // This should resolve to ApiResponse<T>
    } catch (error: any) {
        if (error.response) {
            const errorData = await error.response.json();
            throw new Error(errorData.message);
        } else {
            console.log('request error:', error.message);
            throw error;  // Make sure to throw the error if you can't handle it
        }
    }
};

export const get = <T = unknown>(path: string): Promise<ApiResponse<T>> => HttpRequest<T>(path, 'GET');
export const post = <T = unknown>(path: string, body: object): Promise<ApiResponse<T>> => HttpRequest<T>(path, 'POST', body);
export const put = <T = unknown>(path: string, body: object): Promise<ApiResponse<T>> => HttpRequest<T>(path, 'PUT', body);
export const patch = <T = unknown>(path: string, body: object): Promise<ApiResponse<T>> => HttpRequest<T>(path, 'PATCH', body);
export const del = <T = unknown>(path: string): Promise<ApiResponse<T>> => HttpRequest<T>(path, 'DELETE');