import { useState } from "react";
import '../components/AdDesigner.css';

export default function AdDesigner (){
    const [flavor, setFlavor] = useState<string>("Choose a Flavor");
    const [theme, setTheme] = useState("Light");
    const [fontSize, setFontSize] = useState<number>(32); 
    
    return (
        <div>
            <div>
                <h1 className="AdDesignerHeader">Ad Designer</h1> 
            </div>
            <div className={theme === "Light" ? "light" : "dark"}>
                <h4>Vote For</h4>
                <h1 className="AdDesignerFlavor" style={{fontSize:fontSize}}>{flavor}</h1>
            </div>
            <div>
                <h3>What to Support</h3>
                <button disabled={flavor === "Chocolate"} onClick={()=>{setFlavor("Chocolate")}}>Chocolate</button>
                <button disabled={flavor === "Vanilla"} onClick={()=>{setFlavor("Vanilla")}}>Vanilla</button>
                <button disabled={flavor === "Strawberry"} onClick={()=>{setFlavor("Strawberry")}}>Strawberry</button>
            </div>
            <div>
                <h3>Color Theme</h3>
                <button disabled={theme === "Light"} onClick={()=>{setTheme("Light")}}>Light</button>
                <button disabled={theme === "Dark"} onClick={()=>{setTheme("Dark")}}>Dark</button>
            </div>
            <div> 
                <h3>Font Size</h3>
                <button onClick={()=>{setFontSize(prev => prev-1)}}>Down</button>
                <span>{fontSize}</span>
                <button onClick={()=>{setFontSize(prev => prev+1)}}>Up</button>
            </div>
        </div>
    )
}