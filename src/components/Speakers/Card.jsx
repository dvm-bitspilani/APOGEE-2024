import { useLoader } from '@react-three/fiber';
import { TextureLoader, MeshBasicMaterial } from 'three';

function Card() {
  const texture = useLoader(TextureLoader, '../../../public/images/speaker-card.png');

  return (
    <mesh position={[15,-5, 0]}>
      <boxGeometry args={[0.25, 27, 45]}  />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Card;