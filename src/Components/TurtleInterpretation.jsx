import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import {Stack} from '../Utils/Stack';
import { useFrame } from '@react-three/fiber';

const degreetoradian = (degrees) => {
    return degrees * (Math.PI / 180);
}

function Turtle({ lsystem, length, color, width, angle = 90, canvasPosition = [0, 0, 0] }) {
    const points = [];
    const LString = lsystem;
    let pointPosition = new THREE.Vector3(0, 0, 0); // initial point position
    const localLength = length/10;
    const angleChange = degreetoradian(angle);
    let direction = new THREE.Vector3(1, 0, 0); // initial direction
    const vectorY = new THREE.Vector3(0, 1, 0);
    const vectorZ = new THREE.Vector3(0, 0, 1);
    let savedPointsStack = new Stack();
    let directionSaveStack = new Stack();
    const lineRef = useRef();
    const [position, setPosition] = useState([0, 0, 0]);
   
    useEffect(() => {
        setPosition(canvasPosition);
    }, [canvasPosition]);


   


    for (let char of LString) {
        switch (char) {
          case 'F':
            points.push(pointPosition.clone());
            pointPosition.add(direction.clone().multiplyScalar(localLength));
            points.push(pointPosition.clone());
            break;
          case 'G':
            points.push(pointPosition.clone());
            pointPosition.add(direction.clone().multiplyScalar(localLength));
            points.push(pointPosition.clone());
            break;
          case '+':
            direction.applyAxisAngle(vectorZ, angleChange);
            break;
          case '-':
            direction.applyAxisAngle(vectorZ, -angleChange);
            break;
          case '*':
            direction.applyAxisAngle(vectorY, angleChange);
            break;
          case '/':
            direction.applyAxisAngle(vectorY, -angleChange);
            break;
          case '[':
            let savedPoint = pointPosition.clone();
            let savedDirection = direction.clone();
            directionSaveStack.push(savedDirection);
            savedPointsStack.push(savedPoint); // Assuming savedPointsStack is a Stack instance
            break;
          case ']':
            if (!savedPointsStack.isEmpty() && !directionSaveStack.isEmpty()) {
              pointPosition = savedPointsStack.pop();
              direction = directionSaveStack.pop();
            }
            break;
          default:
            break;
        }
    }
    

    return (
        <Line
            ref={lineRef}
            position={position}
            points={points} // array of THREE.Vector3
            color={color} // color of the line
            lineWidth={width} // width of the line
            segments
        />
    );
}

export default Turtle;