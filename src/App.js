import React, { useState } from "react";
import "./App.css";




function App() {
 const [count,setCount] = useState(0)
 const [like,setLike] = useState(0)
 const [dislike,setDislike] = useState(0)
 const [img,setImg] = useState(true)

 let imgArr = [1,2,3,4,5,6,7,8,9,10,11]

 const func = ()=>{
  setLike(like=>like+1)
  setCount(con=>con+1)
  count > 9 ? setImg(false) : setImg(true)
 }
 const func2 = ()=>{
  setDislike(dislike=>dislike+1)
  setCount(con=>con+1)
  count > 9 ? setImg(false) : setImg(true)
 }

 const restart = ()=>{
  window.location='/'
 }

  return (
    <div className="container">
      <div className="likeAndDislike">
      <div className="like"><img  src="/Images/meme2.png" width={'100px'}/> Like: {like}</div>
      <div className="dislike" ><img  src="/Images/memeLike.png" width={'100px'}/>DisLike: {dislike}</div>
      </div >
      <div className='text'>

    {!img && (like > dislike ? 'I see you Like it then you should go and code with Mor-D':'well... you just saved yourself from coding with Mor-D')}
      </div>
    {img && <div>
      
        {/* <p>{count}</p> */}
        <img src={`/Images/${imgArr[count]}.jpg`} width='400px' height='400px' className="imgg"/>
    </div>}
    <div className="buttons">

        <button className="likeBtn" disabled={!img} onClick={func}>Like</button>
        <button className="dislikeBtn"  disabled={!img} onClick={func2}>Dislike</button>
        {!img && <button onClick={restart}>Restart</button>}
    </div>
    
    </div>
  );
}

export default App;
