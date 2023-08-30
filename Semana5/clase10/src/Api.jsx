import React from 'react'
import { useState, useEffect } from 'react';
import './Api.css'

const Api = () => {

    const [memeArray, setMemeArray] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => setMemeArray(data.data.memes))

    }, [])


    return (
        <div>

            {memeArray.map((meme, index) => (
                <div key={index} className="meme">
                    <img src={meme.url} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Api