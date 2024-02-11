import React, { Suspense } from 'react';
import { useWindowSize } from 'rooks';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import bgImage from '../../public/images/praneel.png';
import '../styles/events/events.css';

function Image(props) {
    const texture = useLoader(THREE.TextureLoader, bgImage);
    const { viewport } = useThree();

    return (
        <mesh position={props.position}>
            <planeGeometry attach="geometry" args={[viewport.width, viewport.height]} />
            <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
        </mesh>
    )
}

function EventsPage() {
    const {innerHeight , innerWidth} = useWindowSize();
    console.log(innerWidth)
    return (
        <div className="eventsContainer">
            <Canvas>
                <Suspense fallback={null}>
                    {/* <Image position={[-, 0, 0]} /> */}
                    <Image position={[-innerWidth/400, 0, 0]} />
                    <Image position={[innerWidth/100 - innerWidth/400 , 1, 0]} />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default EventsPage;
