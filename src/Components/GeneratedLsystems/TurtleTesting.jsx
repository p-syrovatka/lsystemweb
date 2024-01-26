import { Line } from "@react-three/drei";
import * as THREE from "three";
import { BufferGeometry, LineBasicMaterial } from "three";
import { useCallback, useEffect, useRef, useState } from "react";
import { Stack } from "../../Utils/Stack";

function TurtleTest({
  lsystem,
  length = 1,
  color,
  width = 1,
  angle = 90,
  initialPosition = [0, 0, 0],
  initialDirection = [1, 0, 0],
}) {
  const degreetoradian = useCallback((degrees) => {
    return degrees * (Math.PI / 180);
  }, []);
  const [points, setPoints] = useState([]); // array of THREE.Vector3
  const LString = lsystem;
  const [line, setLine] = useState(null);
  let pointPosition = new THREE.Vector3(
    initialPosition[0],
    initialPosition[1],
    initialPosition[2]
  ); // initial point position
  const localLength = length / 10;
  const angleChange = degreetoradian(angle);
  let direction = new THREE.Vector3(
    initialDirection[0],
    initialDirection[1],
    initialDirection[2]
  ); // initial direction
  const vectorY = new THREE.Vector3(0, 1, 0);
  const vectorZ = new THREE.Vector3(0, 0, 1);
  let savedPointsStack = new Stack();
  let directionSaveStack = new Stack();
  const lineRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    console.log(`LString: ${LString}`);
  }, [LString]);

  useEffect(() => {
    const newPoints = [];
    if (typeof LString !== "string" && !Array.isArray(LString)) {
      console.error("LString is not iterable");
      return;
    }

    for (let char of LString) {
      switch (char) {
        case "F":
          newPoints.push(pointPosition.clone());
          pointPosition.add(direction.clone().multiplyScalar(localLength));
          newPoints.push(pointPosition.clone());
          break;
        case "G":
          newPoints.push(pointPosition.clone());
          pointPosition.add(direction.clone().multiplyScalar(localLength));
          newPoints.push(pointPosition.clone());
          break;
        case "+":
          direction.applyAxisAngle(vectorZ, angleChange);
          break;
        case "-":
          direction.applyAxisAngle(vectorZ, -angleChange);
          break;
        case "*":
          direction.applyAxisAngle(vectorY, angleChange);
          break;
        case "/":
          direction.applyAxisAngle(vectorY, -angleChange);
          break;
        case "[":
          let savedPoint = pointPosition.clone();
          let savedDirection = direction.clone();
          directionSaveStack.push(savedDirection);
          savedPointsStack.push(savedPoint); // Assuming savedPointsStack is a Stack instance
          break;
        case "]":
          if (!savedPointsStack.isEmpty() && !directionSaveStack.isEmpty()) {
            pointPosition = savedPointsStack.pop();
            direction = directionSaveStack.pop();
          }
          break;
        default:
          break;
      }
    }
    setPoints(newPoints);
  }, [LString]); // dependencies

  useEffect(() => {
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({
      color: color,
      linewidth: 1,
      linecap: "round", //ignored by WebGLRenderer
      linejoin: "round",
    });
    const line = new THREE.Line(geometry, material);
    setLine(line);
  }, [points]);
  return line && <primitive object={line} />;
}

export default TurtleTest;
