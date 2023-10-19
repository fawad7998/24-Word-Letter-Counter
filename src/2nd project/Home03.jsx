import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';

function Home03() {
  const [text, setText] = useState('');
  // onchange
  const onchange = (a) => {
    setText(a.target.value);
  };
  // Clear Text
  const clearText = () => {
    setText('');
  };
  //Uppercase
  const Uppercase = () => {
    const text02 = text.toUpperCase();
    setText(text02);
  };
  //Uppercase`
  const lowercase = () => {
    const text03 = text.toLowerCase();
    setText(text03);
  };

  // c;l
  const cleartxt = () => {
    // navigator.clipboard.writeText(text);
    const newtext3 = text.split(/[ ]+/);
    setText(newtext3.join(' '));
  };

  return (
    <>
      <div className="container ">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            // placeholder="Enter Your Text Here"
            value={text}
            onChange={onchange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>

        <button className="btn btn-primary" onClick={Uppercase}>
          Upper-Case
        </button>
        <button className="btn btn-primary" onClick={lowercase}>
          lower-Case
        </button>
        <button className="btn btn-primary" onClick={cleartxt}>
          lower-zdcxvx
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            toast('hedsfsfdfds');
          }}
        >
          toast
        </button>
        <ToastContainer />
      </div>
    </>
  );
}

export default Home03;

// npx create react-app

// npm create vite@latest App -- --template react
