import { createNewText } from "../HybridComponents/TextCreator.jsx"
import { robotMaterial,bloomBlueMaterial } from "../HybridComponents/Materials.jsx"

export default function Texts({
    midwifery,scene3D,boat,bike,
    mail,github,twitter,linkedin,
    hoverEnterEvent,hoverLeaveEvent
}){

    const exan = './fonts/Exan-Regular.ttf'
    const michroma = './fonts/Michroma-Regular.ttf'

    return(
        <> 
        {/* HOME */}
            {createNewText('PORTFOLIO 2023',[0,Math.PI * 0.5,0],[-2.1,6.5,23.5],1.1,exan,robotMaterial,1)}
            {createNewText('ARTHUR ENGEL',[0,Math.PI * 0.5,0],[-2.1,7.5,1.8],.9,michroma,robotMaterial)}  
            {createNewText('26',[0,Math.PI * 0.5,0],[-2.05,7.43,-5.17],.7,exan,robotMaterial)}
            {createNewText('FREELANCE',[0,Math.PI * 0.5,0],[-2,5.55,-6.5],1.2,exan,robotMaterial)}  
            {createNewText('CREATIVE DEVELOPER',[0,Math.PI * 0.5,0],[-2,4.55,-6.5],.62,exan,robotMaterial)}
            {createNewText('STATUS',[0,Math.PI * 0.5,0],[-2,3.9,5.7],.6,exan,robotMaterial)}
            {createNewText('READY FOR NEW MISSION',[0,Math.PI * 0.5,0],[-2,3.4,3.55],.35,michroma,bloomBlueMaterial)}

        {/* ABOUT */}
            {createNewText('THIS LAB CREATES IMMERSIVE EXPERIENCES',
                [0,Math.PI * 0.5,0],[-2.65, 7.4, -42.9],.4,michroma,robotMaterial,8,null,'center'
            )}
            {createNewText('For All Devices',[0,Math.PI * 0.5,0],[-2.65, 6.2, -42.9],.7,exan,bloomBlueMaterial)}
            {createNewText('THE LAB USES MANY MODERN TECHNOLOGIES SUCH AS',
                [0,Math.PI * 0.5,0],[-2.65, 7.3, -63.9],.35,michroma,robotMaterial,8,null,'center'
            )}
            {createNewText('React   Three JS',[0,Math.PI * 0.5,0],[-2.65, 6.4, -63.9],.5,exan,bloomBlueMaterial)}
            {createNewText('TO MEET THE NEEDS OF CLIENTS ACROSS THE GALAXY',
            [0,Math.PI * 0.5,0],[-2.65, 5.55, -63.9],.35,michroma,robotMaterial,8,null,'center'
            )}
            {createNewText('WE ALSO HAVE A STRONG INTEREST IN THE WHOLE',
                [0,Math.PI * 0.5,0],[-2.65, 3.5, -63.9],.35,michroma,robotMaterial,8,null,'center'
            )}
            {createNewText('Blockchain ecosystem',[0,Math.PI * 0.5,0],[-2.65, 2.5, -63.9],.5,exan,bloomBlueMaterial)}
            
        {/* PROJECTS */}
            {/* project1 */}
            {createNewText('Midwifery',[0,Math.PI * 0.5,0],[-2.1, -10.2, -79.1],.85,exan,bloomBlueMaterial)}
            {createNewText('WEBSITE FOR A MIDWIFE DESCRIBING HER PRACTICE AND THE CARE SHE PROVIDES',
                [0,Math.PI * 0.5,0],[-2.1, -12, -79.1],.35,michroma,robotMaterial,7,null,'center'
            )}
            {createNewText('Role',[0,Math.PI * 0.5,0],[-2.1, -14, -76.5],.6,exan,bloomBlueMaterial)}
            {createNewText('Frontend  webgl',[0,Math.PI*0.5,0],[-2.1, -14.8, -77.8],.45,exan,robotMaterial)}
            {createNewText('Visit the website',[0,Math.PI * 0.5,0],[-2.1, -16.4,-88.6],.55,exan,
                bloomBlueMaterial,10,midwifery,'center',hoverEnterEvent,hoverLeaveEvent
            )}
            {/* project2 */}
            {createNewText('3D SCENE',[0,Math.PI * 0.5,0],[-2.1, -10.2, -100.3],.85,exan,bloomBlueMaterial)}
            {createNewText('INTERACTIVE 3D SCENE INTEGRATED ON THE WEB REPRESENTING MY WORKSPACE',
                [0,Math.PI * 0.5,0],[-2.1, -12, -100.3],.35,michroma,robotMaterial,7,null,'center'
            )} 
            {createNewText('Role',[0,Math.PI * 0.5,0],[-2.1, -14, -97.5],.6,exan,bloomBlueMaterial)}
            {createNewText('webgl  3D Modeling',[0,Math.PI * 0.5,0],[-2.1, -14.8, -99.2],.45,exan,robotMaterial)}
            {createNewText('Visit the website',[0,Math.PI * 0.5,0],[-2.1, -16.4, -109.8],.55,exan,
                bloomBlueMaterial,10,scene3D,'center',hoverEnterEvent,hoverLeaveEvent)}
            {/* project3 */}
            {createNewText('SHIP SIMULATOR',[0,Math.PI*0.5,0],[-2.1, -10.2, -121.3],.85,exan,bloomBlueMaterial)}
            {createNewText('CONTROL SIMULATION OF AN ANCIENT SHIP RESPONSIVE TO 3D PHYSICS',
                [0,Math.PI * 0.5,0],[-2.1, -12, -121.3],.35,michroma,robotMaterial,7,null,'center'
            )}
            {createNewText('Role',[0,Math.PI * 0.5,0],[-2.1, -14, -118.9],.6,exan,bloomBlueMaterial)}
            {createNewText('webgl  3D Modeling',[0,Math.PI * 0.5,0],[-2.1, -14.8, -120.6],.45,exan,robotMaterial)}
            {createNewText('Visit the website',[0,Math.PI * 0.5,0],[-2.1, -16.4, -130.7],.55,exan,bloomBlueMaterial,
                10,boat,'center',hoverEnterEvent,hoverLeaveEvent
            )}
            {/* project 4 */}
            {createNewText('PORTFOLIO',[0,Math.PI * 0.5,0],[-2.1, -10.2, -142.4],.85,exan,bloomBlueMaterial)}
            {createNewText('A PORTFOLIO HIGHLIGHTING THE PROJECTS I HAVE COMPLETED TO SHOW MY SKILLS TO CLIENTS',
                [0,Math.PI * 0.5,0],[-2.1, -12, -142.4],.35,michroma,robotMaterial,7,null,'center'
            )}   
            {createNewText('Role',[0,Math.PI*0.5,0],[-2.1, -14, -139.7],.6,exan,bloomBlueMaterial)}
            {createNewText('webgl  3D Modeling',[0,Math.PI * 0.5,0],[-2.1, -14.8, -141.4],.45,exan,robotMaterial)}
            {/* project 5 */}
            {createNewText('BIKE CONCEPT',[0,Math.PI * 0.5,0],[-2.1, -10.2, -163.5],.85,exan,bloomBlueMaterial)}
            {createNewText('AN INTERACTIVE PRODUCT PAGE HIGHLIGHTING ALL THE FEATURES OF A FICTIONAL BIKE',
                [0,Math.PI * 0.5,0],[-2.1, -12, -163.5],.35,michroma,robotMaterial,7,null,'center'
            )}
            {createNewText('Role',[0,Math.PI*0.5,0],[-2.1, -14, -160.7],.6,exan,bloomBlueMaterial)}
            {createNewText('webgl  3D Modeling',[0,Math.PI*0.5,0],[-2.1, -14.8, -162.4],.45,exan,robotMaterial)}
            {createNewText('Visit the website',[0,Math.PI * 0.5,0],[-2.1, -16.4, -172.7],.55,exan,bloomBlueMaterial,
                10,bike,'center',hoverEnterEvent,hoverLeaveEvent
            )}

        {/* CONTACT */}
            {createNewText('CONTACT',[0,Math.PI * 0.5,0],[-2.19, -10, -187],1,exan,robotMaterial)}
            {createNewText(`LET'S SHARE ABOUT YOUR PROJECT`,[0,Math.PI*0.5,0],[-2.19, -12.5, -188.5],.6,
                michroma,bloomBlueMaterial,7
            )}
            {createNewText('GITHUB',[0,Math.PI *0.5,0],[-2.19, -9.6, -201],.8,exan,bloomBlueMaterial,
                10,github,'center',hoverEnterEvent,hoverLeaveEvent
            )}
            {createNewText('MAIL',[0,Math.PI *0.5,0],[-2.19, -11.3, -200.45],.8,exan,bloomBlueMaterial,
                10,mail,'center',hoverEnterEvent,hoverLeaveEvent
            )}
            {createNewText('TWITTER',[0,Math.PI *0.5,0],[-2.19, -13, -201.1],.8,exan,bloomBlueMaterial,
                10,twitter,'center',hoverEnterEvent,hoverLeaveEvent
            )}
            {createNewText('LINKEDIN',[0,Math.PI *0.5,0],[-2.19, -14.76, -201.3],.8,exan,bloomBlueMaterial,
                10,linkedin,'center',hoverEnterEvent,hoverLeaveEvent
            )}

        </>
    )
}