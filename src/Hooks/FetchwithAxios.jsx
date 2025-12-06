import axios from 'axios'
import React, { Component } from 'react'
import { useEffect, useState } from 'react'

const FetchWithAxios = () => {

    const [resourseType, setResourceType] = useState("posts")

    const [items, setItems] = useState([])


    // useEffect(() => {
    //     console.log("Render")

    // }, [resourseType])

    // useEffect(() => {

    //     fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
    //         .then(response => response.json())
    //         .then(json => setItems(json))
    //         .catch(error => console.error(error))

    // }, [])

    useEffect(() => {

        const FetchData = async () => {

            try {

                const {data}  = await axios.get(`https://jsonplaceholder.typicode.com/${resourseType}`)
                setItems(data)

                console.log(data)
            } catch (error) {

                console.log(error)

            }
        }

        FetchData()
    },[resourseType])
    return (
        <div>
            <h1>{resourseType}</h1>

            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <button onClick={() => setResourceType('users')}>Users</button>

            <ul>

                {items.map((item) => (

                    <li key={item.id}>{item.title || item.name}</li>
                ))}

            </ul>
        </div>
    )

}


export default FetchWithAxios