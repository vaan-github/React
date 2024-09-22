import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
export default function Github (){
    const data = useLoaderData()


    // 1st Method : non optimized Method

    // const [data, setData] = useState("No data")
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/vaan-github")
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data) 
    //     })

    // },[])



    return(
        <>
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
            github followers : {data.followers}
            <img src={data.avatar_url} alt="Aniket Varma" />
        </div>
        </>
    )
}


// 2nd Method : optimized method using loader.
export const githubInfoLoader = async () => {
    
    const response = await fetch("https://api.github.com/users/vaan-github")

    return response.json()
}