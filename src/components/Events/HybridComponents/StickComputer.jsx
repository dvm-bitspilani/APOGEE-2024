import { useEffect,useRef } from "react"
import gsap from 'gsap'

export default function StickComputer({material,stick1,stick2,stick3,stick1Position,stick2Position,stick3Position}){

    let stickComputers = [],
    stickTimeOut

    const stickComputer1 = useRef(),stickComputer2 = useRef(),stickComputer3 = useRef()

    useEffect(()=>{

        stickComputers = [stickComputer1,stickComputer2,stickComputer3]
        scaleStickComputer()

        return(()=>{
            clearTimeout(stickTimeOut)
        })
    },[])

    const scaleStickComputer = ()=>{              
        stickComputers.forEach(element=>{ gsap.to(element.current.scale,{z : Math.random(),duration : 1.5})})
        stickTimeOut = setTimeout(()=>scaleStickComputer(),1500)
    }

    return(
        <>
           <mesh ref={stickComputer1}            
            geometry={stick1} material = {material}
            position={[stick1Position.x , stick1Position.y, stick2Position.z]}
          />
          <mesh ref={stickComputer2}           
            geometry={stick2} material = {material}
            position={[stick2Position.x , stick2Position.y, stick2Position.z]}
          />
          <mesh ref={stickComputer3}           
            geometry={stick3} material = {material}
            position={[stick3Position.x , stick3Position.y, stick3Position.z]}
          />
        </>
    )
}