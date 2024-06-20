import React, { InputHTMLAttributes } from "react"
import classes from "./MyInput.module.css"

const MyInput = ({title="input", placeholder="Search",...props}:InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={classes.myInput} title={title} placeholder={placeholder} {...props}/>
  )
};

export default MyInput;
