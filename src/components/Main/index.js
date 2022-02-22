import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import PostService from '../services/Post.service'
import { Comments } from './comments'
export const MainPage = () => {
  
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    PostService.postGet()
    .then(item =>{

        console.log(item)
        setData(item)

    })
    setLoading(false)
  }, [])


    if(loading){return <h1>Loading</h1>}
    else{

        return(

            <Container>

                <h1 className='text-center'>Form</h1>

                {

                    data.map(item =>{

                        return(

                            <Card >
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.username}</Card.Subtitle>
                                    <Card.Text>
                                    {item.post}
                                    </Card.Text>
                                    <Card.Link href={`/comment/${item._id}`}>Comment</Card.Link>
                                    <Comments id={item._id}/>
                                
                                </Card.Body>
                            </Card>

                        )

                    })

                }

            </Container>

        )

    }
}
