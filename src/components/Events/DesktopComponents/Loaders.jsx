import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import gsap from 'gsap'
import Interface from "./Interface.jsx";
import '../../../styles/events/loader.css'

export default function Loader(){

    let tl
    const { active, progress, errors, item, loaded, total } = useProgress()
    
    useEffect(() => {
        if(progress === 100){
            tl = new gsap.timeline()
            tl.to('.loaderContainer span',{left : '100%',duration : 1})
            tl.to('.loaderContainer h2',{opacity: 0,duration : 1},1)
            tl.to('.loaderContainer h4',{opacity : 1,duration : 1.5},2)
            tl.to('.loaderContainer h3',{opacity : 1,duration : 1},4)
            tl.to('.loaderContainer img',{opacity : 0,duration : 1},5)
            tl.to('.loaderContainer h4',{opacity : 0,duration : 1},5.5)
            tl.to('.loaderContainer h3',{opacity : 0,duration : 1},5.5)
            tl.to('.loaderContainer',{
                opacity : 0,
                duration : 2,
                zIndex : -1,
                onComplete: ()=>{
                    document.querySelector('.loaderContainer h4').style.display = 'none'
                    document.querySelector('.loaderContainer h3').style.display = 'none'
                }
            },6)
        }

        return (()=>{
            if(tl){
                let arrayOfTween = tl.getChildren()
                arrayOfTween[7].eventCallback("onComplete",null)
                tl.kill()                
            }            
        })
    }, [progress]);

    return(
        <>
            <div className="loaderContainer">
                <img src='./logo/logoAE.png' alt='logo'/>
                
                <h2>{Math.round(progress)}</h2>
                
                <span style={{transform:`scaleX(${progress *0.01})`}}></span>
                <h3>
                    <p>somewhere in the galaxy </p>
                    <p>2023</p> 
                </h3>
                <h4>creative developer laboratory...</h4>

                <h5 className="contact">CONTACT</h5>
                <h5 className="home">HOME</h5>
                <h5 className="about">ABOUT</h5>
                <h5 className="projects">PROJECTS</h5>
            </div>
            <Interface/>
        </>      
    )
}