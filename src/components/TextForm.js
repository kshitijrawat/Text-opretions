import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [find, setFind] = useState("");
    const [replace, setReplace] = useState("");
    const handelOnFind=(event)=>{
        setFind(event.target.value);
    }
    const handelOnReplace =(event)=>{
        setReplace(event.target.value);
    }
    const handelReplaceClick=()=>{
        let newText=text.replace(find,replace);
        setText(newText);
        props.showAlert("the word is replace","success");

    }
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("the word is is uppercase","success");

    }
    const handelDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("the word is in lowercase","success");

    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    const handelCopy =()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("the word is copies in the clipboard","success");

    }
    const handelExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("the extra spaces in the the text is removed","success");

    }
    return (
        <><div>
            <div className="mb-3" >
                <h1 className={`text-${props.mode === 'light' ? 'dark':'light'}`}>{props.heading}</h1>
                <textarea className="form-control" value={text} id="myBox" rows="10" style={{backgroundColor : props.mode === 'light' ? 'white':'grey'}} onChange={handelOnChange} placeholder=" enter "></textarea >
            </div>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handelUpClick}>Upper</button>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handelDownClick}>Lower</button>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handelCopy}>Copy Text</button>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handelExtraSpace}>Remove Extra space</button><br/>
            
        </div>
            <div className='container my-3'>
                <h1  className={`text-${props.mode === 'light' ? 'dark':'light'}`}>your text summary here </h1>
                <p  className={`text-${props.mode === 'light' ? 'dark':'light'}`}>
                    lenght of your text is {text.length} .
                </p>
                <p  className={`text-${props.mode === 'light' ? 'dark':'light'}`}> 
                    no. of word is your text is {text.split(" ").length}
                </p>
                <p  className={`text-${props.mode === 'light' ? 'dark':'light'}`}>
                    it will take {text.split(" ").length * 0.008} minutes to read this text
                </p>
                <h3  className={`text-${props.mode === 'light' ? 'dark':'light'}`}>Preview</h3>
                <p  className={`text-${props.mode === 'light' ? 'dark':'light'}`}>{text}</p>
            </div>
            <div className='container my-3' >
            <input className=" mx-2 my-2" type="text " value={find} style={{backgroundColor : props.mode === 'light' ? 'white':'grey'}} onChange={handelOnFind} id="find" placeholder='find'/>
            <input className=" mx-2 my-2" type="text" value={replace} style={{backgroundColor : props.mode === 'light' ? 'white':'grey'}} onChange={handelOnReplace} id="replace" placeholder='replace'/><br/>
            <button className={`btn btn-${props.btnColor} mx-2 my-2`} onClick={handelReplaceClick}>Replace</button><br/>
            
            </div>
        </>
    );
}