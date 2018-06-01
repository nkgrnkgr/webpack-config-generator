import React from 'react';
import ReactDOM from 'react-dom';
import Sub from './components/sub';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <Sub/>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.querySelector('#app'));