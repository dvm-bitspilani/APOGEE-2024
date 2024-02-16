import {
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  Color,
  DoubleSide,
  Vector2,
} from "three";
import { shaderMaterial } from "@react-three/drei";

export const baseMaterial = new MeshStandardMaterial({
  color: 0xa9a5bb,
  emissive: 0xeeeeff,
  emissiveIntensity: 1.3,
  roughness: 0.2,
  metalness: 1.4,
  envMapIntensity: 0.3,
  side: DoubleSide,
});

export const glassMaterial = new MeshPhysicalMaterial({
  color: 0xccccff,
  emissiveIntensity: 0,
  ior: 2.33,
  transparent: true,
  opacity: 0.15,
  roughness: 0.08,
  metalness: 1,
  envMapIntensity: 0.7,
});

export const robotMaterial = new MeshStandardMaterial({
  color: 0xffffff,
  emissive: 0xffffff,
  emissiveIntensity: 0.5,
  roughness: 0.28,
  metalness: 0.95,
  envMapIntensity: 0.2,
  side: DoubleSide,
});

export const whiteMaterial = new MeshStandardMaterial({
  color: 0xffffff,
  emissive: 0xffffff,
  emissiveIntensity: 1,
  roughness: 0.15,
  metalness: 0.95,
  envMapIntensity: 0.2,
});

export const blackMaterial = new MeshPhysicalMaterial({
  color: 0x000000,
  emissive: 0x000000,
  metalness: 1,
  roughness: 0,
  envMapIntensity: 0.5,
  side: DoubleSide,
});

export const bloomBlueMaterial = new MeshStandardMaterial({
  color: new Color(0, 3, 5),
  toneMapped: false,
  side: DoubleSide,
});
export const whiteBloomMaterial = new MeshStandardMaterial({
  color: new Color(2.5, 2, 2),
  toneMapped: false,
});
export const alumMaterial = new MeshStandardMaterial({
  color: 0xdddddd,
  emissiveIntensity: 1.5,
  emissive: 0xffffff,
  metalness: 1.35,
  roughness: 0.1,
  envMapIntensity: 0.35,
  side: DoubleSide,
});

export const smokeDroneMaterial = shaderMaterial(
  {
    uTime: 0,
    uUvFrequency: new Vector2(3, 2),
    uTimeFrequency: 4,
    uColor: new Color("#e8d9bf"),
    transparent: true,
  },
  // vertex shader
  /*glsl*/ `
  uniform float uTime;
  varying vec2 vUv; 
  
  vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}

  float perlin2d(vec2 P){
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * 
      vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
  }
  
  
  void main(){
  
      vec3 newPosition = position;
      vec2 displacementUv = uv;
      displacementUv *= 10.0;
      displacementUv.y -= uTime * 0.8;
  
      float displacementStrenght = pow(uv.y * 3.0,0.01);
      float perlin = perlin2d(displacementUv) * displacementStrenght;
  
      newPosition.x += perlin * 0.15;
      newPosition.y += perlin * 0.08;
  
      vec4 modelPosition = modelMatrix * vec4(newPosition , 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
  
      vUv = uv;
  }
  
  
  `,
  // fragment shader
  /*glsl*/ `
  uniform vec2 uUvFrequency;
  uniform float uTime;
  uniform float uTimeFrequency;
  uniform vec3 uColor;  
  varying vec2 vUv;

  vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}

  float perlin2d(vec2 P){
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * 
      vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main(){
    vec2 uv = vUv * uUvFrequency;
    uv.y += uTime * uTimeFrequency;

    float borderAlpha = min(vUv.y * 2.5, (1.0 - vUv.x) * 2.8);
    borderAlpha =  borderAlpha * ( vUv.x );

    float perlin = perlin2d(uv);
    perlin *= borderAlpha;

    gl_FragColor = vec4(uColor, perlin);  
}
  `,
);
