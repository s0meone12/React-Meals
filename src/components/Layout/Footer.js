import classes from './Footer.module.css'

const Footer = () => {
    return(
    <div className={classes.footerBody}>
         <div className={classes.text}>
            <h4>HEALTHY FAST-CASUAL FOOD, CRAFTED WITH HEART IN REACTMEALS</h4>
            <p>come again </p>
        </div>
        <div className={classes.footer}>
            <footer>copyright ©</footer>
        </div>
       
    </div>
    )
}

export default Footer;