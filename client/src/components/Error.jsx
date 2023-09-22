import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate()
  return (
    <div>
        <img src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1700697600&v=beta&t=UPXfmmbGah2vLxxWG6dBr5p9hqpBZW_wa_FbHdAiNys" alt="" />
        <Button  onClick={()=> navigate("/")} variant="text" color="default">
          Go Back
        </Button>
    </div>
  )
}

export default Error