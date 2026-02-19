import { Edges } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const LinedBox = (props: any) => {
  const meshRef = useRef<Mesh>(null!);

  // executes code on every rendered frame
  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta / 2;
    meshRef.current.rotation.y += delta / 2;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => (document.body.style.cursor = 'grab')}
      onPointerOut={() => (document.body.style.cursor = 'default')}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial transparent opacity={0} />
      <Edges color='white' lineWidth={2} />
    </mesh>
  );
};

export default LinedBox;
