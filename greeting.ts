import React from "react";

// Define an interface for the props
interface GreetingProps {
  name: string; // The 'name' prop must be a string
}

// Convert the functional component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}! </div>;
};

export default Greeting; // Export the Greeting component
