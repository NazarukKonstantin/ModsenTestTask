import { InputHTMLAttributes } from "react"
import classes from "./MyInput.module.css"

const MyInput = ({title="input", placeholder="Search",className,...props}:InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={classes.myInput+" "+className} title={title} placeholder={placeholder} {...props}/>
  )
};

export default MyInput;
