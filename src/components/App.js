import React, {useState, useEffect} from "react";

function App() {
const [dogImage, setDogImage] = useState('')

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(`from initial fetch`, data)
            setDogImage(data)
        })
    },[])

if (!dogImage) return <p>Loading...</p>

    return (
<div>
    {console.log(`from App return`, dogImage)}
 <img src={dogImage.message} alt={dogImage.message}></img>
</div>
    )
}

export default App