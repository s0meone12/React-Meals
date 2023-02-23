import classes from './Card.module.css'

const Card = (props) => {
 
    // const classes = 'card' + props.className;
    // return (
    //     <div className= {classes}>{props.children}</div>
    // )

  return <div className={classes.card}>{props.children}</div>
    
}

export default Card;