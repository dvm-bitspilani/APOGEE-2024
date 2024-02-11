import { Vector3 } from 'three'
import { useEffect } from 'react'
import { useFrame } from "@react-three/fiber"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
// import ScrollSmoother from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollTrigger)

export default function ControlsRobot({robot,robotHead,robotBall,drone,elevator}){

    const z = 9.59347, y = -0.993051
    let scroll = 0, heightRobot = 0,prevScroll = 0,dir,distance,vector,
        
    robotOnElevator = false, robotIsOnFirstPlat = true,headOfRobot = null,
    initialPositionOfElevator = y  + 1.94996
    
    // let smoother = ScrollSmoother.create({ smooth : 3,effects : true})

    let mouse = {x : 0, y : 0}, pos = new Vector3(0,0,0), positionY = 0

    useEffect(() => {
        const handleMouseMove = (e)=>{
            mouse.x = e.clientX / window.innerWidth * 2 - 1
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1 
        }
        window.addEventListener('mousemove',(e)=> handleMouseMove(e))
        return () => {
            window.removeEventListener('mousemove',(e)=> handleMouseMove(e))
            // smoother.kill()
            ScrollTrigger.killAll() 
        }
    }, []);

    const moveDrone = (state)=>{
        gsap.to(drone.current.position,{
            x : pos.x + 6,
            y : positionY + Math.sin(state.clock.elapsedTime)* 0.25,
            z : pos.z + mouse.x * 10,
            duration : 5,
        })     
    }

    useFrame((state)=>{
         
        scroll = ScrollTrigger.positionInViewport('.container', 'top')* 10 
      

        scroll < prevScroll ? robotPushFront() : 0
        scroll > prevScroll ? robotPushBack() : 0

            // Move Robot
        if(scroll > -73.5){
            robotOnElevator = false
            robotIsOnFirstPlat = true
            robot.current.position.z = z + scroll
            robot.current.position.y = y 
            robotBall.current.rotation.x = scroll * 0.85 
            moveDrone(state)          
        } 
        else if(scroll <= -117.5){
            robotOnElevator = false
            robotIsOnFirstPlat = false
            robot.current.position.y = -18.57
            robot.current.position.z = z + (scroll + 44) 
            robotBall.current.rotation.x = ((scroll + 44) * 0.85)            
            moveDrone(state)
        }//Height of Robot
        else if(scroll <= -73.5 && scroll > -117.5){ 
            robotOnElevator = true
            robotIsOnFirstPlat = false
            heightRobot = scroll + 73.5
            robot.current.position.z = z - 73.5
            robot.current.position.y = y + heightRobot * 0.4 

            gsap.to(drone.current.position,{
                x : pos.x + 6,
                y : robot.current.position.y + 3  + Math.sin(state.clock.elapsedTime)* 0.25,
                z : -63.895 - mouse.x * 1.8,
                duration : .7
            })        
        }        

            //elevator Update
        elevator.current.position.y = robot.current.position.y - initialPositionOfElevator
      
            //Drone Update     
        vector = new Vector3(mouse.x ,mouse.y , 0.5)  
        vector.unproject(state.camera)
        dir = vector.sub(state.camera.position).normalize()
        distance = -state.camera.position.x / dir.x
        pos = state.camera.position.clone().add( dir.multiplyScalar(distance))

        if(pos.y < -16.5)
            positionY = -16.5            
        else if(pos.y < 1.5 && robotIsOnFirstPlat)
            positionY = 1.5                        
        else {
            positionY = pos.y - mouse.y * 5 
        }
                                                        
        drone.current.lookAt(new Vector3(
            drone.current.position.x + 1,
            pos.y - mouse.y * 5,
            pos.z + mouse.x * 10
        ))
  
            //Camera Update     
        state.camera.position.set(13.5,robot.current.position.y + 3 ,robot.current.position.z)
        state.camera.lookAt(0,state.camera.position.y - 0.3 ,state.camera.position.z)  

        prevScroll = scroll
    })

    const robotPushFront = ()=>{
        if(robotHead.current !== undefined ){
            headOfRobot = 'front'
            gsap.to(robotHead.current.rotation,{x : 0.1,y : Math.PI * 0.5})  
        }
    }

    const robotPushBack = ()=>{
        if(robotHead.current!== undefined ){
            headOfRobot = 'back'
            gsap.to(robotHead.current.rotation,{x : -0.1,y :- Math.PI * 0.5})    
        }        
    }  
}