import React, {useState} from 'react'
import { ReactPropTypes } from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
       // console.log("Handle Up was Used" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = () =>{
       // console.log("Handle Lo was Used" + text);
        let newText=text.toLowerCase();
        setText(newText)

    }
    const handleLclearlick = () =>{
       // console.log("Handle Lo was Used" + text);
        let newText='';
        setText(newText)

    }
    const handleOnchange = (event) =>{
        console.log("On Change was Used");
        setText(event.target.value);
    }
    

    const [text, setText] = useState('');

 return (
        <>
        <div className="mb-3" >
            <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white' , color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}> Convert To Uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}> Convert To Lowercase </button>
        <button className="btn btn-primary mx-1" onClick={handleLclearlick}> Clear </button>
        </div>
        <div className="container">
            <h1>
                Your Text summary
            </h1>
            <p>
                Words: {text.split(" ").length} Characters :{text.length}
            </p>
            <p>
            Total Minutes to Read Text{0.008 * text.split(" ").length}
            </p>
            <h2> Preview</h2>
            {text} 
        </div>
        </>
  )
}
