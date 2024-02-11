import { useRef,useEffect } from "react"
import gsap from 'gsap'

export default function PathIncubator({
    path1,path1Position,
    path2,path2Position,
    path3,path3Position,
    path4,path4Position,
    path5,path5Position,
}){
    
    const path1Ref = useRef(),path2Ref = useRef(),path3Ref = useRef(),path4Ref = useRef(),path5Ref = useRef()
    let tl;

    useEffect(() => {
        pathAnimation()
        let loopAnimation = setInterval(()=>{
            pathAnimation()
        },4500)
        return(()=>{
            clearInterval(loopAnimation) 
            let arrayOfTween = tl.getChildren()
            arrayOfTween.forEach(element => {
                element.eventCallback("onComplete",null)
            })
            
            tl.kill()                       
        })
    }, [])

    const pathAnimation = ()=>{
        tl = new gsap.timeline()

        tl.to(path1Ref.current.scale,{ x : 1, duration : .5})
        tl.to(path2Ref.current.scale,{z : 1, duration : 1.25})
        tl.to(path3Ref.current.scale,{ x : 1, duration : .5},.8)
        tl.to(path4Ref.current.scale,{x : 1, duration : 1.25})
        tl.to(path5Ref.current.scale,{z : 1,duration : .5})

        tl.to(path1Ref.current.scale,{ x : 0, duration : .5}, 2.2)
        tl.to(path1Ref.current.position,{ x : path1Position.xOffset, y : path1Position.yOffset ,duration : .5,onComplete: ()=>{
            path1Ref.current.position.x = path1Position.x
            path1Ref.current.position.y = path1Position.y
        }}, 2.2)
       
        tl.to(path2Ref.current.scale,{z : 0, duration : 1.25},2.7)
        tl.to(path2Ref.current.position,{z : path2Position.zOffset ,duration : 1.25,onComplete : ()=>{
            path2Ref.current.position.z = path2Position.z
        }},2.7)
        
        tl.to(path3Ref.current.scale,{ x : 0, duration : .5},3)
        tl.to(path3Ref.current.position,{ x : path3Position.xOffset, y : path3Position.yOffset,duration : .5,onComplete : ()=>{
            path3Ref.current.position.x = path3Position.x
            path3Ref.current.position.y = path3Position.y
        }},3)

        tl.to(path4Ref.current.scale,{x : 0, duration : 1.25},3.8)
        tl.to(path4Ref.current.position,{ x : path4Position.xOffset, y : path4Position.yOffset,duration : 1.25,onComplete : ()=>{
            path4Ref.current.position.x = path4Position.x
            path4Ref.current.position.y = path4Position.y
        }},3.8)

        tl.to(path5Ref.current.scale,{z : 0,duration : .5},5)
        tl.to(path5Ref.current.position,{ z : path5Position.zOffset ,duration : .5,onComplete : ()=>{
            path5Ref.current.position.z = path5Position.z
        }},5)
    }
    return(
        <>
            <mesh
                ref={path1Ref}
                geometry={path1}
                position={[path1Position.x, path1Position.y, path1Position.z]}
                rotation={[0, 0, -0.79524009]}
                scale={[0,1,1]}
            />
            <mesh
                ref={path2Ref}
                geometry={path2}
                position={[path2Position.x, path2Position.y, path2Position.z]}
                rotation={[0, 0, -0.79524009]}
                scale={[1,1,0]}
            />
            <mesh
                ref={path3Ref}
                geometry={path3}
                position={[path3Position.x, path3Position.y, path3Position.z]}
                rotation={[0, 0, -0.79524009]}
                scale={[0,1,1]}
            />            
            <mesh
                ref={path4Ref}
                geometry={path4}
                position={[path4Position.x, path4Position.y, path4Position.z]}
                rotation={[0, 0, -0.79524009]}
                scale={[0,1,1]}
            />
            <mesh
                ref={path5Ref}
                geometry={path5}
                position={[path5Position.x, path5Position.y, path5Position.z]}
                rotation={[0, 0, -0.79524009]}
                scale={[1,1,0]}
            />
        </>
    )
}