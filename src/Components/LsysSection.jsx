import { Canvas, useThree } from '@react-three/fiber';
import React, { useState, useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import LsysData from './LSystemData';
import { TransformControls } from '@react-three/drei';
import { useDrag } from 'react-use-gesture';
import Turtle from './TurtleInterpretation';
import { LsystemGen } from '../Utils/LsystemGenerator';


export default function LsysSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [turtles, setTurtles] = useState([]);
  const [transfromControlState, setTransformControlState] = useState('translate');
  let rules = { 'F': 'F+F-F-F+F' };
  let axiom = 'F-F-F-F';
  let iteration = 2;
  const defaultLsystem = LsystemGen(axiom, rules, iteration);
  const controlsRef = useRef();


  const positionRef = useRef([0, 0, 0]);
  const bind = useDrag(({ offset: [x, y] }) => {
    positionRef.current = [x, y, 0];
  });



  const handleGenerate = (data) => {
    addTurtle(data.newLsystem, data.length, data.width, data.color, data.angle);
  }

  const addTurtle = (lsystem, length, width, color, angle) => {
    const id = Math.random();
    setTurtles(prevturtles => [...prevturtles, { id, lsystem, length, width, color, angle }]);
  }



  const removeTurtle = (id) => {
    setTurtles(prevTurtles => prevTurtles.filter(turtle => turtle.id !== id));
  };

  function BackgroundSetter() {
    const { gl } = useThree();
    useEffect(() => {
      gl.setClearColor('white');
    }, [gl]);
    return null;
  }
  useEffect(() => {
    setTurtles([]);
    addTurtle(defaultLsystem, 1, 5, 'black');
    console.log("useEffect")
  }, []);

  const resetViewAngle = () => {
    controlsRef.current.reset();
  }

  const handleTransformControlChange = (event) => {
    setTransformControlState(event.target.value);
  }

  return (
    <div className='grid md:grid-cols-3 grid-cols-1'>
      <div className='h-96 col-span-2 relative'>
        <div className="absolute top-0 left-0 m-4 z-10">
          <div className="inline-block relative w-64">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="grid-state"
              value={transfromControlState}
              onChange={handleTransformControlChange}
            >
              <option>Translate</option>
              <option>Rotate</option>
              <option>Scale</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 6l10 10 10-10z" />
              </svg>
            </div>
          </div>
        </div>
        <Canvas >
          {/* <Turtle LSysString= {generetadeLsystem} length={10} width={500} color={'black'} /> */}
          {!isDragging && <OrbitControls ref={controlsRef} />}
          <BackgroundSetter />
          <ambientLight intensity={0.5} />
          {turtles.map((turtle, index) => (
            <TransformControls
              mode={transfromControlState.toLocaleLowerCase()}
              key={turtle.id}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
            >
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
          ))}
        </Canvas>
        <button onClick={resetViewAngle}> Reset View</button>
      </div>
      <div className=''>
        <LsysData onGenerate={handleGenerate} />
        <div className='p-1'>
          {turtles.map((turtle, index) =>
            <div key={index} className='grid grid-cols-3 '>
              <div className='flex items-center'>
                <p>Image n.{index + 1}</p>
              </div>
              <button className="col-start-2 col-span-2 bg-green-900 text-white border-2 rounded-lg p-2" onClick={() => removeTurtle(turtle.id)}>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}