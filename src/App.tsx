import { useState,useEffect } from 'react'
import './App.css';
import Imgcomp from './components/imgComponent';

function App() {
  const [form,setForm]=useState({
    randomImg:"https://i.imgflip.com/1bij.jpg"
});

const [img,setImg]=useState([]);
useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then(data=>setImg(data.data.memes));
},[]);


/* function handleClick(){
    let randomNumber=Math.floor(Math.random() * img.length);
    let url=img[randomNumber]['url'];
    
} */

  return (
    <>
    <div style={{
              margin:'20px',
              paddingLeft:'50px',
              display:'flex',
              flexWrap:'wrap'
              }}>
    {img.map((e,id)=>{
      if(id<10){
    return <Imgcomp  img={e.url}/>}
    })}
    </div>
    </>
  )
}

export default App