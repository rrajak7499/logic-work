import React, {useState} from 'react'

export default function MyInputBox(props) {
    
    // Making upper case 
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // Making Lower case 
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // Copying Text 
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    // Remove Extra spaces 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange  = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here.");

    return (
        <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea id="myInput" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            <button className="btn btn-primary m-3" onClick={handleUpClick} >Make UpperCase</button>
            <button className="btn btn-primary m-3" onClick={handleLoClick} >Make LowerCase</button>
            <button className="btn btn-primary m-3" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary m-3" onClick={handleExtraSpaces} >Remove Extra Spaces</button>

            {/* <button className="btn btn-primary m-3" onClick={handleCopyClick} >Copy Clipboard</button> */}
        </div>
        <div className="container">
            <h1 className={`text-${props.mode === 'white' ? 'black' : 'white'}`}>Text counting</h1>
            <p>{text.length} Letters and {text.split(" ").length} Words</p>
            <h2>Text preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
