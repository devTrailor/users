import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {

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

    // add User
    const addUser = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/users`, userInput);
        console.log(userInput);
        navigate("/")

    }




    return (
        <div className='add-user'>
            <Container>
                <Form onSubmit={addUser}>
                    <Form.Group>
                        <Form.Control className='mt-5' name="name" value={name} onChange={handleChange} placeholder='Enter Your Name...' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className='mt-5' name="username" value={username} onChange={handleChange} placeholder='Enter Your Username...' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className='mt-5' name="email" value={email} onChange={handleChange} placeholder='Enter Your Email...' />
                    </Form.Group>
                    <Button type="submit" className='mt-5' >Add User</Button>

                </Form>
            </Container>
        </div>
    )
}

export default AddUser