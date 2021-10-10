import React, {useState} from 'react'

export default function MyInputBox(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange  = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here.");

    return (
        <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
            <button className="btn btn-primary m-3" onClick={handleUpClick} >Make UpperCase</button>
            <button className="btn btn-primary m-3" onClick={handleLoClick} >Make LowerCase</button>
        </div>
        <div className="container">
            <h1>Text counting</h1>
            <p>{text.length} Letters and {text.split(" ").length} Words</p>
            <h2>Text preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
