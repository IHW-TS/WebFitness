import React from 'react';
import './App.css';
import FitnessForm from './components/FitnessForm';
import FitnessChart from './components/FitnessChart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formData) {
    this.setState({
      data: [...this.state.data, formData]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Fitness App</h1>
        <FitnessForm onSubmit={this.handleFormSubmit} />
        <FitnessChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
