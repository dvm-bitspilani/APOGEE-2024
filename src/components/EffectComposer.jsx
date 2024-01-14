import {
  Bloom,
  DepthOfField,
  EffectComposer,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";

export default function EffectComposerLayer() {
  return (
    <EffectComposer disableNormalPass>
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={2}
      />
    </EffectComposer>
  );
}
