import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [text, setText] = useState('');

  // ONCHANGE HANDLER
  const changetext = (a) => {
    setText(a.target.value);
  };
  // CLEAR TEXT
  const cleartext = () => {
    setText('');
    toast.success('Text Cleared', {
      position: 'top-right',
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  // LOCASE
  const locase = () => {
    const newtxt = text.toLowerCase();
    setText(newtxt);
    toast.success('Converted to Lower-Case', {
      position: 'top-right',
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  // UPCASE
  const upcase = () => {
    const newtxt2 = text.toUpperCase();
    setText(newtxt2);
    toast.success('Converted to Upper-Case', {
      position: 'top-right',
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  // Remove Spaces
  const Rspace = () => {
    const newtext3 = text.split(/[ ]+/);
    setText(newtext3.join(' '));
    toast.success('Extra Spaces Removed', {
      position: 'top-right',
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  // COPY TEXT (Issue)
  const copytext = () => {
    navigator.clipboard.writeText(text);
    toast.success('Text Copied', {
      position: 'top-right',
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  // Theming section

  // if ((lighttheme = true)) {
  //   if ((darktheme = true)) {
  //   } else {
  //     toast('error');
  //   }
  // }

  const lighttheme = () => {
    document.getElementById('themes').style.backgroundColor = 'white';
    document.getElementById('themes').style.color = 'black';
  };

  const darktheme = () => {
    document.getElementById('themes').style.backgroundColor = 'black';
    document.getElementById('themes').style.color = 'white';
  };

  return (
    <>
      <div className="container" style={{paddingTop: '5rem'}}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange={changetext}
          ></textarea>
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <button className="btn btn-primary " onClick={cleartext}>
            Clear Text
          </button>
          <button
            className="btn btn-primary"
            onClick={upcase}
            style={{
              marginLeft: '5px',
            }}
          >
            Upper Case
          </button>
          <button
            className="btn btn-primary"
            onClick={locase}
            style={{
              marginLeft: '5px',
            }}
          >
            Lower Case
          </button>
          <button
            className="btn btn-primary"
            onClick={Rspace}
            style={{
              marginLeft: '5px',
            }}
          >
            Remove Spaces
          </button>
          <button
            // id="firstid"
            className="btn btn-primary"
            onClick={copytext}
            style={{
              marginLeft: '5px',
            }}
          >
            Copy Text
          </button>
          {/* Theming Section */}
          <button
            // id="firstid"
            className="btn btn-primary"
            onClick={darktheme}
            style={{
              marginLeft: '5px',
            }}
          >
            Enable Dark Theme
          </button>
          <button
            // id="firstid"
            className="btn btn-primary"
            onClick={lighttheme}
            style={{
              marginLeft: '5px',
            }}
          >
            Enable light Theme
          </button>
        </div>
        <h1>Text Counter</h1>
        <p>
          {
            text.split(' ').filter((f) => {
              return f.length !== 0;
            }).length
          }
          Words
          {text.length} Characters
        </p>
        <h1>Read Time</h1>
        <p>
          {0.008 *
            text.split(' ').filter((e) => {
              return e.length != 0;
            }).length}
          Minutes
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Write Something'}</p>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;

// create a function which defines closures?

// Example one
// const a = 2;
// function one() {
//   const b = 3;
//   function two() {
//     const c = 4;
//     const x = a + b + c;
//     console.log(x);
//   }
//   two();
// }
// one();

// Example Two
// const now = new Date();
// const printTime = function createClosure() {
//   console.log(now);
// };

// printTime(); // Prints the current date and time.
