import classes from './MyButton.module.css'

const MyButton = ({children, ...props}:React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button title="MyBtn" type="button" className={classes.myBtn} {...props}>
      {children}
    </button>
  )
};

export default MyButton;
