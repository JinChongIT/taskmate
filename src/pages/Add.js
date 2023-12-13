import React, { useRef } from 'react'

export const Add = () => {

  const frmTaskName = useRef();
  const frmTaskNum = useRef();

  function submitHandler(formData) {
    formData.preventDefault();
    console.log(frmTaskName.current.value);
    formData.target.reset();
    /*
    const fd = new FormData(formData.target);
    console.log(fd.get("txtTaskName"));
    */
  }

  return (
    <form onSubmit={submitHandler}>
        <input type='text' name="txtTaskName" ref={frmTaskName} />
        <input type='number' name="txtTaskNum" ref={frmTaskNum} />
        <button type="submit">Add to Cart</button>
    </form>
  )
}
