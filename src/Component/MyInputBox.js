import React, {useState} from 'react'

export default function MyInputBox(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleOnChange  = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here.");

    return (
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
            <button className="btn btn-primary m-3" onClick={handleUpClick} >Make UpperCase</button>
            <button className="btn btn-primary m-3" >Make LowerCase</button>
        </div>
    )
}
