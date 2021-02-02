import axios from 'axios'
 
const User_url = 'http://localhost:8080/api/userall';
const User_Add_url = 'http://localhost:8080/api/useradd';
class UserService{
 
    getUserList()
    {
        return axios.get(User_url)
    }

    createUser(user){
        return axios.post(User_Add_url,user)
    }
 
}export default new UserService()