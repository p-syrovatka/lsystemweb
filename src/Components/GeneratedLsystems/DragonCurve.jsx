import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Turtle from '../TurtleInterpretation';
import { LsystemGen } from '../../Utils/LsystemGenerator';
import { useState, useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useContext } from 'react';
import { MousePositionContext } from '../Hero';

function CameraSetter() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(0, 2, 10);
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



function DragonCurve() {
    const [turtles, setTurtles] = useState([]);
    
    let rules = { 'F': 'F+G', 'G': 'F-G' };
    let axiom = 'F';
    let iteration = 10;
    const defaultLsystem = LsystemGen(axiom, rules, iteration);
    const wrapperRef = useRef(null);


    useEffect(() => {
        setTurtles([]);
        addTurtle(defaultLsystem, 2, 2, 'black');
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
        <div ref={wrapperRef} className='flex w-full h-full'>
            <Canvas style={{ width: '100%', height: '100vh' }} gl={{ alpha: true, clearColor: 'rgba(0,0,0,0)' }}>
                <CameraSetter />
                <CameraMovement mousePosition={mousePosition} />
                <OrbitControls enablePan={false} enableZoom={false} />
                <ambientLight intensity={1} />
                {turtles.map((turtle, index) => (

                    <Turtle
                        canvasPosition={[0, -2, 0]}
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