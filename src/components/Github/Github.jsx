import { useEffect, useState } from "react"


function Github() {

    const[data , setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/VISHALSHARMAVS").then((response)=> response.json()).then(data => {
            console.log(data);
            setData(data);
        })
    },[])

  return (
    <div className='dark:text-white text-center m-4  bg-gray-600 text-white p-4 text-3xl dark:bg-gray-800 dark:border-gray-700 dark:m-0'>Github follower:{data.followers}
    <img src={data.avatar_url} alt="" width={300}  /> </div>
  )
}

export default Github