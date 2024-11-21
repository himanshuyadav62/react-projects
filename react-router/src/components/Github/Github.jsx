import { useLoaderData } from "react-router-dom"

export default function Github (){

    const data = useLoaderData(); 

    return (
        <>
        <h1 className="text-4xl text-center p-4">User : Himanshu Yadav</h1>
        <h2 className="text-4xl text-center p-4">Github Followers : {data.followers}</h2>
        <img 
            src={data.avatar_url}
            alt="Himanshu Yadav" 
            className="block mx-auto rounded-full w-32 h-32"
        />
        </>
    )
}

