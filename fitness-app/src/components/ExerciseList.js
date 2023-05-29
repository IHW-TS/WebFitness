import React from 'react';

class ExerciseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [
                'Push-ups',
                'Sit-ups',
                'Squats',
                'Pull-ups',
                'Running'
            ],
            completed: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;

        this.setState(prevState => {
            let completed = prevState.completed;
            if(value) {
                completed.push(name);
            } else {
                completed = completed.filter(exercise => exercise !== name);
            }

            return {
                completed
            };
        });
    }

    render() {
        const exerciseList = this.state.exercises.map((exercise, index) =>
            <li key={index}>
                <label>
                    <input
                        name={exercise}
                        type="checkbox"
                        checked={this.state.completed.includes(exercise)}
                        onChange={this.handleInputChange} 
                    />
                    {exercise}
                </label>
            </li>
        );

        return (
            <div>
                <h2>Liste d'exercices</h2>
                <ul>
                    {exerciseList}
                </ul>
            </div>
        );
    }
}

export default ExerciseList;
