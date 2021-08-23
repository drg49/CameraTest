import React, {useEffect, useRef} from 'react'
import "./App.css";

const App = () => {

  const inputFileRef = useRef()
  const divRef = useRef()

  function handleChange (e) {
    const fileUploaded = e.target.files[0]
    console.log(fileUploaded)
    console.log(fileUploaded.name)

  }

  function appendFiles() {
    console.log(inputFileRef.current.files) 
  }

  function mimicClick(e) {
    e.preventDefault()
    inputFileRef.current.click()
  }

  return(
    <>
      <div ref={divRef}>
        <input type="file" id="upload"  onChange={handleChange} ref={inputFileRef} multiple/>
      </div>
      <section id="input-section">
        <button onClick={(e) => mimicClick(e)}>Select Files</button>
      </section>
      <ul id="listRef">

      </ul>
      <button onClick={appendFiles}>Check Files</button>
    </>
  )
};

export default App