import CssStyle from "./Hero.module.css"
console.log(CssStyle);

const Hero=() => {
   return (
    <h1 className={CssStyle.Hero}>
   this is hero section
    </h1>
   );
}
export default Hero;