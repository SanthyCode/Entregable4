import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const init = {
    birthday: "",
    email: "",
    first_name: "",
    id: '',
    last_name: "",
    password: ""
}

const Form = ({getUsers, updateInfo, setUpdateInfo, createUser}) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect ( () => {
        if(updateInfo){
            reset (updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo){
            const URL = `https://users-crud1.herokuapp.com/users/${updateinfo.id}/`
            axios.patch(URL, data)
                .then(res => {
                    getUsers()
                })
                .catch(err => console.log(err))
                reset(init)
                setUpdateInfo()
        }else{

            createUser(data)
            reset(init)
        }
    }
    console.log(updateInfo)


    return (
        <form onSubmit={handleSubmit(submit)}>
            <ul>
                <li>
                    <label htmlFor="name">Name</label>
                    <input {...register('first_name')} type="text" id='first_name' />
                </li>
                <li>
                    <label htmlFor="LastName">LastName</label>
                    <input {...register('last_name')} type="text" id='last_name'/>
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" id='email'/>
                </li>
                <li>
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} type="date" id='birthday'/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" id='password'/>
                </li>
            </ul>
            <button>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default Form