import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentService from '../../services/Comment.service'

export const Comments = (props) => {
  
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [comment,setComment] = useState(false)

    useEffect(() => {
        setLoading(true)
        CommentService.commentGet(props.id)
        .then(item =>{

            setData(item)

        })
        setLoading(false)
    }, [props.id])

    const commentHandler = (e) =>{

        e.preventDefault()
        setComment(!comment)

    }
    
    
    if(loading){return <div>Loading...</div>}
    else{

        if(comment === false){

            return(<Card className='text-center'>
            <Card.Link href={`#`} onClick={commentHandler}>Show</Card.Link>
            </Card>
            )

        }
        else{return(
            
            <Card className='text-center'>

            {data.map(item =>{

            return(

                
                    <Card.Body className='d-flex justify-content-around w-100 p-1'>
                        <Card.Text className=" text-muted">{item.username}</Card.Text>
                        <Card.Text>{item.comment}</Card.Text>
                    </Card.Body>
                   

            )

        })}
        
        <Card.Link href={`#`} onClick={commentHandler}>Hide</Card.Link>
        </Card>

        
        )}

    }
}
