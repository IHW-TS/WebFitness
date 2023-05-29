import React from 'react';

class FitnessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {weight: '', height: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Poids:
                    <input 
                        type="number" 
                        name="weight" 
                        value={this.state.weight}
                        onChange={this.handleInputChange} 
                    />
                </label>
                <label>
                    Taille:
                    <input 
                        type="number" 
                        name="height" 
                        value={this.state.height}
                        onChange={this.handleInputChange} 
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FitnessForm;
