import * as React from "react";

// A simple stateless component - a function which receives props as it's argument
export function Hey({ name }) {
    return <div>Hey { name }!</div>;
}

// Above is equivelent to this one (if you prefer ES6 arrow functions):
export const Hey2 = ({ name }) => 
    <div>Hey { name }!</div>;
