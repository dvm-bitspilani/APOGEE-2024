import { useRef,useEffect} from "react"
import { useGLTF,Float,Stars } from "@react-three/drei"
import { useFrame} from "@react-three/fiber"
import gsap from 'gsap'
import Texts from "./Texts.jsx"
import ControlsRobot from "./ControlsRobot.jsx"
import Projects from "../HybridComponents/Projects.jsx"
import PathIncubator from "../HybridComponents/PathIncubator.jsx"
import StickComputer from "../HybridComponents/StickComputer.jsx"
import Decals from "../HybridComponents/Decals.jsx"
import { baseMaterial,glassMaterial,robotMaterial, blackMaterial,
    bloomBlueMaterial,whiteBloomMaterial,alumMaterial,smokeDroneMaterial
 } from "../HybridComponents/Materials.jsx"
 import {Color,DoubleSide,Vector3} from 'three'

export default function Decors({
    midwifery,scene3D,boat,bike,   
    github,mail,twitter,linkedin
}) {
    const { nodes,material } = useGLTF("./models/LabDesktopModel.glb")
    
    const drone = useRef(),robot = useRef(),robotHead= useRef(),robotBall=useRef(),
    elevator= useRef(),handCircleRotate = useRef(),    
    parabolaFull = useRef(),parabola= useRef(), antenne= useRef(), gear = useRef(),
    camera1 = useRef(),camera2 = useRef(),camera3 = useRef()

    const smokeDroneMat = new smokeDroneMaterial({ uColor: new Color("#ffeeee"), side : DoubleSide})

    let parabolaTimeOut

    useEffect(() => {     
        rotateParabola()     
        return ()=>{ 
            clearTimeout(parabolaTimeOut)
        }
    }, [])

    useFrame((state,delta)=>{  
        handCircleRotate.current.rotateY(-delta * 2)
        smokeDroneMat.uTime = state.clock.elapsedTime * 2
        antenne.current.rotation.y = -state.clock.elapsedTime * 5
        camera1.current.lookAt(new Vector3(robot.current.position.x,robot.current.position.y,robot.current.position.z))
        camera2.current.lookAt(new Vector3(robot.current.position.x,robot.current.position.y,robot.current.position.z))
        camera3.current.lookAt(new Vector3(robot.current.position.x,robot.current.position.y,robot.current.position.z))
    })
    
    const rotateParabola = ()=>{
        let angle = (-Math.random() * 3 ) + 1.5,
        angle2 = (Math.random() * 0.6 - 0.3) * Math.PI

        gsap.to(parabolaFull.current.rotation,{y : angle, duration : 5})        
        gsap.to(parabola.current.rotation,{ x : angle2, duration : 5})          
        gsap.to(gear.current.rotation,{ x : -angle2, duration : 5})         

        parabolaTimeOut = setTimeout(()=>rotateParabola(),6500)
    }

    const hoverEnterEvent = ()=> document.querySelector('canvas').style.cursor=`url('./cursors/cursor.png'),auto`,
          hoverLeaveEvent = ()=> document.querySelector('canvas').style.cursor=`url('./cursors/cursor1.png'),auto`

    const path1InitPosition = {x : 2.51495, y : 1.23268, z : -20.693,  xOffset : 2.36726, yOffset : 1.38349},
          path2InitPosition = {x : 2.38773, y : 1.36258, z : -20.7222, zOffset : -21.8487},
          path3InitPosition = {x : 2.51563, y : 1.23198, z : -21.6236, xOffset : 2.40821, yOffset : 1.34167},
          path4InitPosition = {x : 2.36726, y : 1.38349, z : -21.8195, xOffset : 1.92176, yOffset : 1.8384},
          path5InitPosition = {x : 1.94223, y : 1.81749, z : -21.7902, zOffset : -21.7195},

    stick1Position = {x : 2.92258573, y : 0.81338191, z : -22.61161804},
    stick2Position = {x : 3.00375509, y : 0.73220623, z : -22.61166},
    stick3Position = {x : 3.08492303, y : 0.65102923, z : -22.61166},

    incubatorReact =  {x : 3,  y : 0.6, z : -15.9,  rot : Math.PI * 0.5, scale : 1.2},
    incubatorThree =  {x : 3,  y : 0.6, z : -28,    rot : Math.PI * 0.5, scale : 1.5},
    project1Gsap =    {x : -2, y : -16, z : -76.4,  rot : Math.PI * 0.5, scale : 1},
    project1Three =   {x : -2, y : -16, z : -77.8,  rot : Math.PI * 0.5, scale : 1.1},
    project2Three =   {x : -2, y : -16, z : -97.2,  rot : Math.PI * 0.5, scale : 1.1},
    project2Blender = {x : -2, y : -16, z : -98.5,  rot : Math.PI * 0.5, scale : 0.9},
    project3Three =   {x : -2, y : -16, z : -118.7, rot : Math.PI * 0.5, scale : 1.1},
    project3Rapier =  {x : -2, y : -16, z : -120.3, rot : Math.PI * 0.5, scale : [1.5,0.4,1.2]},
    project3Blender = {x : -2, y : -16, z : -122,   rot : Math.PI * 0.5, scale : 0.9},
    project4Three =   {x : -2, y : -16, z : -139.5, rot : Math.PI * 0.5, scale : 1.1},
    project4React =   {x : -2, y : -16, z : -141,   rot : Math.PI * 0.5, scale : 1},
    project4Gsap =    {x : -2, y : -16, z : -142.5, rot : Math.PI * 0.5, scale : 1},
    project4Blender = {x : -2, y : -16, z : -144,   rot : Math.PI * 0.5, scale : 0.9},
    project5Three =   {x : -2, y : -16, z : -160.5, rot : Math.PI * 0.5, scale : 1.1},
    project5React =   {x : -2, y : -16, z : -162,   rot : Math.PI * 0.5, scale : 1},
    project5Gsap =    {x : -2, y : -16, z : -163.5, rot : Math.PI * 0.5, scale : 1},
    project5Blender = {x : -2, y : -16, z : -165,   rot : Math.PI * 0.5, scale : 0.9}

  return (
    <>
        <Stars radius={70} depth={100} count={2000} factor={4} saturation={1} fade speed={2}/> 

        <mesh geometry={nodes.baseLab.geometry} material={baseMaterial}matrixAutoUpdate={false}>
            <Decals
              incubatorReact={incubatorReact} incubatorThree={incubatorThree}             
              project1Gsap = {project1Gsap} project1Three = {project1Three}             
              project2Three = {project2Three} project2Blender = {project2Blender}             
              project3Three = {project3Three} project3Rapier = {project3Rapier} project3Blender = {project3Blender}             
              project4Three = {project4Three} project4React = {project4React}             
              project4Gsap = {project4Gsap} project4Blender = {project4Blender}             
              project5Three = {project5Three} project5React = {project5React}             
              project5Gsap = {project5Gsap} project5Blender = {project5Blender}             
            />    
        </mesh> 
        <mesh geometry={nodes.glass.geometry}  material ={glassMaterial} matrixAutoUpdate={false}/>
        <mesh geometry={nodes.blueBloom.geometry} material={bloomBlueMaterial} matrixAutoUpdate={false}/>
        <mesh geometry={nodes.whiteBloom.geometry} material={whiteBloomMaterial} matrixAutoUpdate={false}/>           
        <mesh geometry={nodes.blackFixed.geometry} material={blackMaterial} matrixAutoUpdate={false}/>       
        <mesh ref={handCircleRotate} 
            geometry={nodes.handCircleRotate.geometry} material={whiteBloomMaterial}
            position={[2.09367,1.65156, -23.59899902]}
            rotation={[0.82059128, 0.63158846, -1.06774954]}
        />
        <StickComputer
            material={bloomBlueMaterial}
            stick1={nodes.stickComputer1.geometry}
            stick2={nodes.stickComputer2.geometry}
            stick3={nodes.stickComputer3.geometry}
            stick1Position={stick1Position}
            stick2Position={stick2Position}
            stick3Position={stick3Position}
        />
        <group position={[-2.19,-9.49,-197.59]}>
            <mesh onClick={mail} onPointerEnter={hoverEnterEvent} onPointerLeave={hoverLeaveEvent}
                geometry={nodes.logoContactMail.geometry} material={robotMaterial} position-y={-1.81}
            /> 
            <mesh onClick={github} onPointerEnter={hoverEnterEvent} onPointerLeave={hoverLeaveEvent}
                geometry={nodes.logoContactGithub.geometry} material={robotMaterial}    
            /> 
            <mesh onClick={twitter} onPointerEnter={hoverEnterEvent} onPointerLeave={hoverLeaveEvent}
                geometry={nodes.logoContactTwitter.geometry} material={robotMaterial} position-y={-3.38}
            /> 
            <mesh onClick={linkedin} onPointerEnter={hoverEnterEvent} onPointerLeave={hoverLeaveEvent}
                geometry={nodes.logoContactLinkedin.geometry} material={robotMaterial} position-y={-5.19}
            />     
        </group>
       
        <Float rotationIntensity={0} floatIntensity={2} speed={4}>
            <mesh geometry={nodes.deviceScreen.geometry} material={blackMaterial}
                position={[-3.74856114, 3.52462, -45.04115295]}
            />  
            <mesh geometry={nodes.deviceStructure.geometry} material={robotMaterial}
                position={[-3.64200807, 3.8967, -43.22306061]}
            />  
        </Float>  
        <group ref={elevator}position={[6.04216337, -1.95339799, -63.89643097]}>
            <mesh geometry={nodes.elevatorGlass.geometry} material={glassMaterial}/>              
            <mesh geometry={nodes.elevatorLogo.geometry} material={whiteBloomMaterial}/>
            <mesh geometry={nodes.elevator.geometry} material={baseMaterial}/>
        </group>      
       
       <group ref={robot} position={[6.03043985, -0.99305123, 9.59347057]}>
        <group ref={robotHead}>
            <mesh geometry={nodes.teteRobotWhite.geometry} material={robotMaterial}/>              
            <mesh geometry={nodes.teteRobotBlack.geometry} material={blackMaterial}/>               
        </group>
        <group ref={robotBall}>           
            <mesh geometry={nodes.ballRobotWhite.geometry} material={robotMaterial}/> 
            <mesh geometry={nodes.ballRobotBlack.geometry}material={blackMaterial}/>
        </group>
       </group>

       <group ref={drone} position={[3.95321608, 3.02383804, 7.26879883]}>
            <mesh geometry={nodes.whiteDrone.geometry} material={robotMaterial}/>               
            <mesh geometry={nodes.blackDrone.geometry} material={blackMaterial}/>
            <mesh geometry={nodes.droneSmoke.geometry} material={smokeDroneMat}/>
       </group>
        
        <group ref={parabolaFull} position={[-7.00131,-13.5445,-210.76]} rotation-y={Math.PI *0.3}>
            <group ref={parabola}>
                <mesh geometry={nodes.parabole.geometry} material={alumMaterial} />
                <mesh geometry={nodes.parabole1.geometry} material={bloomBlueMaterial} />
            </group>
            <mesh geometry={nodes.parabole3.geometry} material={bloomBlueMaterial}/>          
            <mesh ref={gear} geometry={nodes.Gear.geometry} material ={alumMaterial} position-y={-1.2245}/>
        </group>
        <mesh ref={antenne} position = {[-6.94229,-13.8555,-218.314]}
            geometry={nodes.antenne.geometry} material={alumMaterial}           
        />

        <group ref={camera1} position={[0.452413,8.26443,-53.396]}>
            <mesh geometry={nodes.camera1White.geometry} material={baseMaterial}rotation-y={-Math.PI * 0.5}/>
            <mesh geometry={nodes.camera1.geometry} material={robotMaterial} rotation-y={-Math.PI * 0.5}/>
            <mesh geometry={nodes.camera1Black.geometry} material={blackMaterial}rotation-y={-Math.PI * 0.5}/>
        </group>
        <group ref={camera2} position={[0.452413,-9.34806 ,-74.3881]}>
            <mesh geometry={nodes.camera2White.geometry} material={baseMaterial}rotation-y={-Math.PI * 0.5}/>
            <mesh geometry={nodes.camera2.geometry} material={robotMaterial} rotation-y={-Math.PI * 0.5}/>
            <mesh geometry={nodes.camera2Black.geometry} material={blackMaterial}rotation-y={-Math.PI * 0.5}/>
        </group>
        <group ref={camera3} position={[0.452413,-9.30464,-179.392 ]}>
            <mesh geometry={nodes.camera3White.geometry} material={baseMaterial}rotation-y={-Math.PI * 0.5}/>
            <mesh geometry={nodes.camera3.geometry} material={robotMaterial} rotation-y={-Math.PI * 0.5}/>
            <mesh geometry={nodes.camera3Black.geometry} material={blackMaterial}rotation-y={-Math.PI * 0.5}/>
        </group>

        <Texts 
            midwifery = {midwifery} scene3D = {scene3D}           
            boat = {boat} bike = {bike}           
            twitter={twitter} github={github}          
            linkedin={linkedin} mail={mail}           
            hoverEnterEvent={hoverEnterEvent} hoverLeaveEvent={hoverLeaveEvent}           
        />  
        <Projects
            project1={nodes.videoProject1}
            project2={nodes.videoProject2}
            project3={nodes.videoProject3}
            project4={nodes.videoProject4}
            project5={nodes.videoProject5}
        />  
        <PathIncubator
            path1 = {nodes.path1.geometry}
            path1Position = {path1InitPosition}
            path2 = {nodes.path2.geometry}
            path2Position = {path2InitPosition}
            path3 = {nodes.path3.geometry}
            path3Position = {path3InitPosition}
            path4 = {nodes.path4.geometry}
            path4Position = {path4InitPosition}
            path5 = {nodes.path5.geometry}
            path5Position = {path5InitPosition}
            bloomBlueMaterial={robotMaterial}
        />                 
        <ControlsRobot
            robot={robot}
            robotBall={robotBall}
            robotHead={robotHead}
            drone={drone}
            elevator = {elevator}
        />    
    </>
  )
}

useGLTF.preload("./models/LabDesktopModel.glb");
