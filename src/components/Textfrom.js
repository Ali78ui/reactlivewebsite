import React, { useState } from 'react'

export default function Textfrom(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upppercase","success : ");
    }
    const handleloClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success : ");
    }
    const Addone = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text + 1;
        setText(newText)
        props.showAlert("Add one in every sentence","success : ");

    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here2');
    // text = "new text"; // Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3" style={{color: props.mode==='dark'?'white':'#7d77a8'}}>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode === 'dark' ? 'grey' : 'light'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-success mx-1" onClick={handleloClick}>Convert to Lower case</button>
                <button className="btn btn-success mx-1" onClick={Addone}>Add one in text</button>
            </div>
            <div className="container" my-2 style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary👍</h2>
                <p>{text.split(" ").length} words and {text.length} characters👌</p>
                <p>{0.008 * text.split(" ").length}Average Minutes to read</p>
                <h2>Preview😈</h2>
                <p>{text.length>0?text:"Enter Your text here"}</p>
            </div>
        </>
    )
}
