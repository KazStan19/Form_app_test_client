import axios from 'axios'

class PostService {

    postGet = () =>{

        return axios.get('http://localhost:5000/get/post')
        .then(promise =>{

            return promise.data

        })

    }

    postPost = (username,title,post) =>{

        axios.post('http://localhost:5000/post',{
            username:username,
            title:title,
            post:post,
            date:Date.now()})
    }

}

export default new PostService