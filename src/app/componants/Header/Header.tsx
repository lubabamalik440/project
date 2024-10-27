import CssStyle from "./Header.module.css"
console.log(CssStyle);

import Link from "next/link";
const Header = () =>{
    return(
    <div className={CssStyle.Header}>
        <ul>
<li>
    <Link href="/home"> home </Link>
    </li>
<br></br>
<li>
    <Link href="/about"> about</Link>
</li>  
<br></br>
<li>
    <Link href="/contact">contact</Link>
</li>
<br></br>
<li>
    <Link href="/service">service</Link>
 </li>
 <br></br>   
   </ul>  
    </div>
   );
}
export default Header;