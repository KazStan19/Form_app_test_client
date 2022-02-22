import React, { useState } from 'react'
import {Button, FormControl, Form ,InputGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PostService from '../services/Post.service'

export const AddPost = () => {

    const [username, setUsername] = useState('')
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')

    const goTo = useNavigate()

    const submitHandler = (e) =>{

        e.preventDefault()
        PostService.postPost(username,title,post)
        goTo('/')
    }

  return (
    <Form className="text-center m-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" />
        </Form.Group>
        <InputGroup className="mb-3" >
            <FormControl value={post} onChange={(e)=>setPost(e.target.value)} as="textarea" placeholder="Enter post" aria-label="With textarea" />
        </InputGroup>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}
