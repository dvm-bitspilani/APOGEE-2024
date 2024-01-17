import {
  Bloom,
  DepthOfField,
  EffectComposer,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";

import {useControls} from "leva";

export default function EffectComposerLayer() {

  const { bloomStrength, bloomThreshold, luminanceSmoothing } = useControls(
    "Post Processing",
    {
      bloomStrength: {
        value: 2.4,
        step: 0.1,
        min: 0,
        max: 10,
      },
      bloomThreshold: {
        value: 0.8,
        step: 0.1,
        min: 0,
        max: 10,
      },
      luminanceSmoothing: {
        value: 0.6,
        step: 0.1,
        min: 0,
        max: 10,
      },
    }
  );

  return (
    <EffectComposer disableNormalPass>
      <Bloom
        intensity={bloomStrength}
        luminanceThreshold={bloomThreshold}
        luminanceSmoothing={luminanceSmoothing}
        mipmapBlur={true}
      />
    </EffectComposer>
  );
}
