import "./styles.css";
import "./Razvan-George-Catrinari.js";
import {add, subtract} from "./math.js"

try {
    const x = 10;
    const y = 5;

    console.log(`${x} + ${y} = ${add(x, y)}`);
    console.log(`${x} - ${y} = ${subtract(x, y)}`);
} catch (error) {
    console.error('Error:', error.message);
}