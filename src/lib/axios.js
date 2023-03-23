import axios from "axios"
const baseUrl = "http://localhost:4000/"
export const getRequest = (url) => { //get a url, and returns data from the url
    
    return new Promise((resolve, reject) => {
        const config = { 
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`  
            }
        }
        axios.get(`${baseUrl}${url}`, config).then(response => {
            console.log(response)
            resolve(response.data.data)
        }).catch((error) => {
            reject(error.message)
        })
    })


    
}