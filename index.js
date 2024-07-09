import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading"},"Namaste React");
// console.log(heading);
// const jsxHeading=(<h1 id="heading">This is Namaste React using JSX</h1>);
// console.log(heading);


//React Element
const heading1=(
<h1 className="head">Namaste React </h1>
)
//one way of writing functional component
const heading=()=>(   
    <h1 className="heading">This is Namaste React</h1>
 );
//one way of writing functional component
const HeadingComponent=()=>{
   return <h1 className="heading2">This is Namaste React</h1>
}

const Title=()=>(
    <h1>This is Title Tag</h1>
);

//Component Composition
const Heading=()=>(
    <div id="tag">
    <Title/>
    <Title></Title>
    <h1>This is Heading Tag</h1>
    </div>
);
const elem=<span>React Element</span>

const title1=(
    {elem},
    <h1>This is Title 1</h1>
);
//react element inside a functional component
const HeadingComponent2=()=>(
    <div id="container">
    {title}
    <h1 className="heading">NAmaste React Function</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //React element rendering

root.render(<Heading/>); //React Functional Component Rendering