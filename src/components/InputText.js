import React, { useState } from 'react'

export default function InputText(props) {
    const handleOnChange = (event) => {
        ChangingText(event.target.value);
    }

    const handleOnReplace = (event) => {
        replaceWord(event.target.value);
    }

    const handleOnReplacingWord = (event) => {
        replaceByWord(event.target.value);
    }

    const ChangeToUpper = () => {
        if (inText.length > 0) {
            let UpperText = inText.toUpperCase();
            ChangingText(UpperText)
            props.showAlert("success", "Text Change to Upper case")
        } else {
            props.showAlert("danger", "Please Enter Text to Convert in Upper Case")

        }
    }

    const ChangeToLower = () => {
        if (inText.length > 0) {
            let LowerText = inText.toLowerCase();
            ChangingText(LowerText)
            props.showAlert("success", "Text Change to Lower case")
        } else {
            props.showAlert("danger", "Please Enter Text to Convert in Lower Case")
        }
    }

    const ClearText = () => {
        ChangingText("")
        props.showAlert("success", "Text clear successfully")
    }

    const ReplaceFirst = () => {
        if (inText.length > 0) {
            ChangingText(inText.replace(replace, replaceBy))
            replaceWord("")
            replaceByWord("")
            props.showAlert("success", `${replace} replace by ${replaceBy}`)
        } else {
            props.showAlert("danger", "Please Enter Text for replace")
        }
    }

    const ReplaceEntire = () => {
        if (inText.length > 0) {
            ChangingText(inText.replaceAll(replace, replaceBy))
            replaceWord("")
            replaceByWord("")
            props.showAlert("success", `${replace} replace by ${replaceBy}`)
        } else {
            props.showAlert("danger", "Please Enter Text for replace")
        }
    }

    const ExtractEmail = () => {
        if (inText.length > 0) {
            let email = inText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
            let emailList = email.join('\n')
            ExtractingEmail(emailList)
            props.showAlert("success", `${email.length} Email Detect in Text`)
        } else {
            props.showAlert("danger", "Please Enter Text for Extract Email")
        }
    }
    const CopyText = () => {
        let text = document.getElementById("InputText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "Copy To clipboard")
    }

    const RemoveExtraSpaces = () => {
        if (inText.length > 0) {
            let InPlainText = inText.split(/[ ]+/);
            ChangingText(InPlainText.join(" "))
            props.showAlert("success", "Extra Spaces Remove From Text")
        } else {
            props.showAlert("danger", "Please Enter Text to Remove Extra Spaces")
        }


    }


    const [inText, ChangingText] = useState('');
    const [replace, replaceWord] = useState('');
    const [replaceBy, replaceByWord] = useState('');
    const [ExEmail, ExtractingEmail] = useState('');

    return (
        <>
            <div>
                <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <div className="mb-3">
                        <label htmlFor="InputText" className="form-label my-3"><h2>{props.heading}</h2></label>
                        <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(9 38 61)', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter Your text Here' value={inText} onChange={handleOnChange} id="InputText" rows="7"></textarea>
                    </div>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-2`} onClick={ChangeToUpper}>Change to Upper Case</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-2`} onClick={ChangeToLower}>Change to Lower Case</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-2`} onClick={ClearText}>Clear Text</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-2`} onClick={ExtractEmail}>Extract Email</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-2`} onClick={CopyText}>Copy Text</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-2`} onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="InputText" className="form-label"></label>
                            <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(9 38 61)', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Replace' value={replace} onChange={handleOnReplace} id="InputText" rows="1"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputText" className="form-label"></label>
                            <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(9 38 61)', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Replace With' value={replaceBy} onChange={handleOnReplacingWord} id="InputText" rows="1"></textarea>
                        </div>
                        <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-1`} onClick={ReplaceFirst}>Replace first</button>
                        <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'success'} mx-2 my-1`} onClick={ReplaceEntire}>Replace All</button>
                    </div>
                </div>
                <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h4>About Your Text</h4>
                    <h3>{ExEmail}</h3>
                    {/* <p>{inText.split(" ").length} words  &  {inText.length} characters</p> */}
                    {/* <p> {inText.split(" ")[inText.split(" ").length -1] ===''? inText.split(/[ ]+/).length-1 :inText.split(/[ ]+/).length}</p> */}
                    <p>{inText.split(" ")[inText.split(" ").length - 1] === '' ? (inText.split(/[ ]+/).length - 1) * 0.008 : inText.split(/[ ]+/).length * 0.008} minutes required to read your Text</p>
                    <h4>Your Text Summery</h4>
                    <p>{inText.length > 0 ? inText : "Enter Text in TextBox to Preview"}</p>
                </div>
            </div>

        </>
    )
}
