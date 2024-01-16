import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Turtle from '../TurtleInterpretation';
import { LsystemGen } from '../../Utils/LsystemGenerator';
import { useState, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';



function DragonCurve() {
    const [turtles, setTurtles] = useState([]);
    let rules = { 'F': 'F+G', 'G': 'F-G'};
    let axiom = 'F';
    let iteration = 10;
    const defaultLsystem = LsystemGen(axiom, rules, iteration);
    useEffect(() => {
        setTurtles([]);
        addTurtle(defaultLsystem, 1, 1, 'black');
        console.log("useEffect")
    }, []);

    function BackgroundSetter() {
        const { gl } = useThree();
        useEffect(() => {
          gl.setClearColor('white');
        }, [gl]);
        return null;
      }

      const addTurtle = (lsystem, length, width, color, angle) => {
        const id = Math.random();
        setTurtles(prevturtles => [...prevturtles, { id, lsystem, length, width, color, angle }]);
      }

    return (
        <div className='flex w-full h-full'>
            <Canvas >
                <BackgroundSetter />
                <ambientLight intensity={0.5} />
                {turtles.map((turtle, index) => (

                    <Turtle
                        key={index}
                        lsystem={turtle.lsystem}
                        length={turtle.length}
                        width={turtle.width}
                        color={turtle.color}
                        angle={turtle.angle}
                        onRemove={() => removeTurtle(turtle.id)}
                    />

                ))}
            </Canvas>
        </div>
    )
}

export default DragonCurve;