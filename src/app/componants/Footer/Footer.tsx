import CssStyle from "./Footer.module.css"
console.log(CssStyle);

const Footer=() => {
   return (
    <h1 className={CssStyle.Footer}>
   this is footer
    </h1>
   );
}
export default Footer;