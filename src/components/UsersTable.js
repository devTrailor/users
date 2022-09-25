import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
const UsersTable = () => {
    const [users, setUsers] = useState()

    const [serUser, setSerUser] = useState("")

    const getUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        console.log(result);
        setUsers(result)
    }

    useEffect(() => {
        getUsers()
    }, [])


    const delUser = async (id) => {

        await axios.delete(`http://localhost:3001/users/${id}`)
        getUsers()

    }






    return (
        <Container>
            <Link to="/addUser" className='btn btn-primary my-3'>Add User</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.data?.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className='btns'>
                                        <Link to={`viewUser/${user.id}`} className='btn btn-outline-primary mx-2'>View</Link>
                                        <Link to={`editUser/${user.id}`} className='btn btn-outline-success mx-2'>Edit</Link>
                                        <Link className='btn btn-outline-danger mx-2' onClick={() => delUser(user.id)}>Delete</Link>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
        </Container>
    )
}

export default UsersTable