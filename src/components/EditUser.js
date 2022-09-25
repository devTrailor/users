import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const { id } = useParams()
    console.log(id);


    const [userInput, setUserInput] = useState({
        name: "",
        username: "",
        email: ""
    })
    const { name, email, username } = userInput

    const navigate = useNavigate()
    const handleChange = (e) => {

        setUserInput({
            ...userInput, [e.target.name]: e.target.value
        })
    }

    const editUser = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`, userInput);
        // console.log(userInput);
        // setUserInput()
        navigate("/")

    }

    // Load Data


    const loadData = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        console.log(result);

        setUserInput(result.data)
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className='edit-user'>
            <Container>
                <Form onSubmit={editUser}>
                    <Form.Group>
                        <Form.Control className='mt-5' name="name" value={name} onChange={handleChange} placeholder='Enter Your Name...' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className='mt-5' name="username" value={username} onChange={handleChange} placeholder='Enter Your Username...' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className='mt-5' name="email" value={email} onChange={handleChange} placeholder='Enter Your Email...' />
                    </Form.Group>
                    <Button type="submit" className='mt-5' >Edit User</Button>

                </Form>
            </Container>
        </div>
    )
}

export default EditUser