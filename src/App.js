import React, { useEffect } from "react";
// adding alan ai to eract app
import alanBtn from "@alan-ai/alan-sdk-web";
// we can initilize our alanBtn once the app loads and to that we can use useEffect
// useEffect is a function that happens when our app starts like componentDidMount in class based component.

const alanKey =
  "ee4360ee920fde6d6f22de618f2fba422e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  // useEffect takes two parameters, one is a callback function and the other is a dependency array
  // based on the dependency array elements the useEffect will run multiple or one time
  // if we leave it empty then it will be called only one time
  useEffect(() => {
    // we have to call alanBtn function and pass few things
    // first is a key
    alanBtn({
      key: alanKey,
      //   we can make alan listen to commands, as many commands as we want
      onCommand: ({ command }) => {
        // actually we are destructuring because we will receive it as an object
        // we can use if statements as well as switch case
        if (command === "testCommand") {
          // we have to write the command: testCommand in the alan studio
          alert("this command was executed");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Alan AI app</h1>
    </div>
  );
};

export default App;
