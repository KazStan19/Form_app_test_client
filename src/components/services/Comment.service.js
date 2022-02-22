import axios from 'axios'

class CommentService {

    commentGet = async (id) =>{

        return axios.get('http://localhost:5000/get/comments')
        .then(promise =>{

            let data = promise.data

            return data.filter(item => item.post === id)

        })

    }

    commentPost = (username,comment,id) =>{

        axios.post('http://localhost:5000/comment',{
            username:username,
            comment:comment,
            date:Date.now(),
            post:id})
    }

}

export default new CommentService