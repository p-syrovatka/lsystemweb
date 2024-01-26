import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Turtle from "../SharedComps/TurtleInterpretation";
import TurtleTest from "./TurtleTesting";
import { LsystemGen } from "../../Utils/LsystemGenerator";
import { useState, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useContext } from "react";
import { MousePositionContext } from "../MainPageComps/Hero";

function CameraSetter() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 2, 50);
    camera.lookAt(10, 1, 0);
  }, [camera]);
  return null;
}

function CameraMovement() {
  const { camera } = useThree();
  const mousePosition = useContext(MousePositionContext);
  useFrame(() => {
    camera.position.x = -mousePosition[0] * 10;
    camera.position.y = -mousePosition[1] * 10;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function BufferTest() {
  const [turtles, setTurtles] = useState([]);
  //const { mousePosition, setMousePosition } = useContext(MousePositionContext);

  let rules = { X: "F+*[//[X]-FX]-F//[-FX]+X", F: "FF" };
  let axiom = "X";
  let iteration = 8;
  const defaultLsystem = LsystemGen(axiom, rules, iteration);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setTurtles([]);
    addTurtle(defaultLsystem, 1, 2, "rgba(17, 45, 19)", 25);
  }, []);

  function BackgroundSetter() {
    const { gl } = useThree();
    useEffect(() => {
        gl.setClearColor("rgba(108, 18, 72)", 0.5);
    }, [gl]);
    return null;
  }

  const addTurtle = (lsystem, length, width, color, angle) => {
    const id = Math.random();
    setTurtles((prevturtles) => [
      ...prevturtles,
      { id, lsystem, length, width, color, angle },
    ]);
    console.log(turtles);
  };

  return (
    <div ref={wrapperRef} className="flex w-full h-full">
      <Canvas
        style={{ width: "100%", height: "100vh", borderRadius: '25px'}}
        gl={{ alpha: true, clearColor: "rgba(0,0,0,0)" }}>
        <CameraSetter />
        <BackgroundSetter />
        {/*<CameraMovement mousePosition={mousePosition} />*/}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        {turtles.map((turtle, index) => (
          <TurtleTest
            initialPosition={[0, -35, 0]}
            key={index}
            lsystem={turtle.lsystem}
            length={turtle.length}
            width={turtle.width}
            color={turtle.color}
            angle={turtle.angle}
            initialDirection={[0, 1, 0]}
            onRemove={() => removeTurtle(turtle.id)}
          />
        ))}
      </Canvas>
    </div>
  );
}

export default BufferTest;
