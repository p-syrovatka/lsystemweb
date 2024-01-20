import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import LsysData from "./LSystemData";
import { TransformControls } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import Turtle from "./TurtleInterpretation";
import { LsystemGen } from "../Utils/LsystemGenerator";
import TransformControlSelect from "./TransformStateControl";
import ObjectList from "./ObjectList";
import LsysStochData from "./LSysStochasticData";
import LsystemTabs from "./LsystemTabs";
import { v4 as uuidv4 } from "uuid";


export default function LsysSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [turtles, setTurtles] = useState([]);
  const [transfromControlState, setTransformControlState] =
    useState("translate");
  const [showTransformControls, setShowTransformControls] = useState(true);
  const [activeTab, setActiveTab] = useState("Deterministic");
  let rules = { F: "F+F-F-F+F" };
  let axiom = "F-F-F-F";
  let iteration = 2;
  const transformControlsRef = useRef();
  const defaultLsystem = LsystemGen(axiom, rules, iteration);
  const controlsRef = useRef();

  const positionRef = useRef([0, 0, 0]);
  const bind = useDrag(({ offset: [x, y] }) => {
    positionRef.current = [x, y, 0];
  });

  useEffect(() => {
    setTurtles([]);
    addTurtle(defaultLsystem, 1, 5, "black");
  }, []);


  const handleGenerate = (data) => {
    addTurtle(data.newLsystem, data.length, data.width, data.color, data.angle);
  };

  const addTurtle = (lsystem, length, width, color, angle) => {
    const id = uuidv4();
    setTurtles((prevturtles) => [
      ...prevturtles,
      {
        id,
        lsystem,
        length,
        width,
        color,
        angle,
        position: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
        rotation: { x: 0, y: 0, z: 0 },
      },
    ]);
  };

  const removeTurtle = (id) => {
    setTurtles((prevTurtles) =>
      prevTurtles.filter((turtle) => turtle.id !== id)
    );
  };
  const resetViewAngle = () => {
    controlsRef.current.reset();
  };

  const handleTransformControlChange = (event) => {
    setTransformControlState(event.target.value);
  };

  function BackgroundSetter() {
    const { gl } = useThree();
    useEffect(() => {
      gl.setClearColor("white");
    }, [gl]);
    return null;
  }

  function renderSwitch(activeTab) {
    switch (activeTab) {
      case "Deterministic":
        return <LsysData onGenerate={handleGenerate} />;
      case "Stochastic":
        return <LsysStochData onGenerate={handleGenerate} />;
      default:
        return <LsysData onGenerate={handleGenerate} />;
    }
  }

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-2">
      <div className="lg:min-h-[700px] lg:max-h-[800px] col-span-2 relative  ">
        <div className="absolute top-0 left-0 m-4 z-10 gap-1 sm:flex">
          <TransformControlSelect
            transfromControlState={transfromControlState}
            handleTransformControlChange={handleTransformControlChange}
          />
          <button
            className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onClick={resetViewAngle}>
            {" "}
            Reset View
          </button>
          <button
            className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onClick={() => setShowTransformControls(!showTransformControls)}>
            Toggle Transform Controls
          </button>
        </div>
        <Canvas className="border p-4 rounded-lg">
          {!isDragging && <OrbitControls ref={controlsRef} />}
          <BackgroundSetter />
          <ambientLight intensity={0.5} />
          {turtles.map((turtle, index) =>
           
              <TransformControls
                mode={transfromControlState.toLocaleLowerCase()}
                enabled={showTransformControls}
                key={turtle.id}
                showX={showTransformControls}
                showY={showTransformControls}
                showZ={showTransformControls}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}>
                <Turtle
                  {...bind()}
                  lsystem={turtle.lsystem}
                  length={turtle.length}
                  width={turtle.width}
                  color={turtle.color}
                  angle={turtle.angle}
                  onRemove={() => removeTurtle(turtle.id)}
                />
              </TransformControls>
          )}
        </Canvas>
      </div>
      <div className="">
        <div className="flex p-2 justify-center">
          <LsystemTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {renderSwitch(activeTab)}

        <div className="p-1">
          <ObjectList turtles={turtles} removeTurtle={removeTurtle} />
        </div>
      </div>
    </div>
  );
}
