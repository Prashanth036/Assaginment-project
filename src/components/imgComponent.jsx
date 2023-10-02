

export default function Imgcomp({img}){
  console.log(img);
    return(
        <>
        <div style={{
            margin:'30px',
            padding:'50px',
            height:'250px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}>
        <img src={img} width={200} height={200} style={{
            border:'2px solid skyblue'
        }}/>
        <p style={{
             fontFamily:'monospace',
             color:'red'
        }}>You can use images to<br/> create memes</p>
        </div> 
        </>
    )
}