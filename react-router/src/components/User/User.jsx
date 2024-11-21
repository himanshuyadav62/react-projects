import { useParams } from "react-router-dom"

export default function User() {
    const {userId} = useParams()
    return (
        <div>
            <h1 className='text-4xl text-center p-4'>User : {userId}</h1>
        </div>
    )
}