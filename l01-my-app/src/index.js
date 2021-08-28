// import React, { Component, Fragment, PureComponent } from "react";
import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "./index.css";
import reactDom from "react-dom";
import App from "./App";

// const myElement1 = <div><h2>Локальное время { new Date().toLocaleTimeString() }</h2></div>;
// const MyComponent1 = () => myElement1;

// setInterval(Tick, 1000);

// function Tick() {
// ReactDOM.render(
// <MyComponent1 />,
//   document.getElementById('root')
// );
// }

//---------------------------------task2

// const myElement1 = (
//   <div>
//     <h2>My element 1</h2>
//   </div>
// );
// const MyComponent1 = () => myElement1;
// const myComponent1_Element1 = <MyComponent1 />;

// const myElement2 = (
//   <div>
//     <h2>My element 2</h2>
//   </div>
// );
// function MyComponent2() {
//   return myElement2;
// }

// const myElement3 = (
//   <div>
//     <h2>My element 3</h2>
//   </div>
// );

// class MyComponent3 extends React.Component {
//   render() {
//     return myElement3;
//   }
// };

// const myElement4 = (
//   <div>
//     <h2>My element 4</h2>
//   </div>
// );
// class MyComponent4 extends PureComponent {
//   render() {
// return myElement4;
//   };
// };

// ReactDOM.render(
//   <div id="root1">
//     <React.Fragment>
//       <MyComponent1 />
//       <MyComponent2 />
//       <MyComponent3 />
//       <MyComponent4 />
//     </React.Fragment>
//     <Fragment>
//       <MyComponent1 />
//       <MyComponent2 />
//       <MyComponent3 />
//       <MyComponent4 />
//     </Fragment>
//     <>
//       <MyComponent1 />
//       <MyComponent2 />
//       <MyComponent3 />
//     </>
//     <div id="node1">
//       <MyComponent1 />
//       <MyComponent2 />
//       <MyComponent3 />
//     </div>
//   </div>,
//   document.getElementById("root")
// );


//----------------------------------task 3
const lastName="Zainashev";
const obj = {
  lastName,
  name: 'Eldar',
  age: 32};

const element=<header>Наше приложение</header>

reactDom.render(
  <Fragment>   
    <App>{element}</App>
    <App>value</App>
    <App children="value" />
    <App/>
 <App a={1} b={true} c={false} d e={"text"} f="Hello" g={{}}  obj1={obj} obj2={obj} />
    </Fragment>,
  document.getElementById('root')
)
