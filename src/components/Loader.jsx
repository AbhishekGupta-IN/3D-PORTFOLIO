import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p>{progress.toFixed()}%</p>
    </Html>
  )
}

export default Loader