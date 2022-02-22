import React, { useState } from 'react'
import {Button, FormControl, Form, InputGroup} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import CommentService from '../services/Comment.service'

export const AddComment = () => {

    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')

    const {postID} = useParams()
    const goTo = useNavigate()

    const submitHandler = async (e) =>{

        e.preventDefault()
        CommentService.commentPost(username,comment,postID)
        goTo('/')

    } 
    

  return (
    <Form className="text-center m-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter email" />
        </Form.Group>
        <InputGroup className="mb-3" controlId="formGroupComment">
            <FormControl placeholder='enter comment' value={comment} onChange={(e)=>setComment(e.target.value)} as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}
