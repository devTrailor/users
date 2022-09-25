import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ViewUser = () => {

    const [userInfo, setUserInfo] = useState()

    const { id } = useParams()
    console.log(id);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        // console.log(result.data);
        setUserInfo(result.data)
    }
    console.log(userInfo);
    useEffect(() => {
        loadUser()
    }, [])

    if (!userInfo) return "Loading...."

    return (
        <div className='view-user'>

            <Container>
                <h3>User Details</h3>
                <div className='user-details card p-2'>
                    <label htmlFor="name">Name:</label>
                    <p>{userInfo?.name}</p>
                    <label htmlFor="username">Username:</label>
                    <p>{userInfo?.username}</p>
                    <label htmlFor="email">Email:</label>
                    <p>{userInfo?.email}</p>
                </div>
            </Container>

        </div>
    )
}

export default ViewUser