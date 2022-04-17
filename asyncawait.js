const axios = require('axios').default;
async function getJSONAsync(){
    let api = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users") 
    console.log('result',api) 
}
async function createJSONAsync(){
    const data = {
        "name": "Pham Tuan Anh",
        "avatar": "https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg"
    }
    const api = await axios.post("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users", data) 
    console.log(api.data) 
}
async function getDetail(){
    const id = 80;
    const api = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?id=" + id) 
    console.log(api.data) 
}
async function updateUser(){
    const id= 90;
    const data = {
        "name": "Pham Tuan Anh",
        "avatar":""
    }
    const api = await axios.put("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/" + id, data) 
    console.log(api.data) 
}
async function deleteUser(){
    const id= 90;
    const api = await axios.delete("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/" + id) 
    console.log(api.data) 
}
deleteUser()