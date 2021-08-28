import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';

const MyComponent = () => <div>
  <h2>Локальное время { new Date().toLocaleTimeString() }</h2>
</div>;

setInterval(Tick, 1000);
function Tick() {
ReactDOM.render(
<MyComponent />,
  document.getElementById('root')
);
}
