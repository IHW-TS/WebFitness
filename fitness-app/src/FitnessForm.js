import React from 'react';

class FitnessForm extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Poids:
                    <input type="number" name="weight" />
                </label>
                <label>
                    Taille:
                    <input type="number" name="height" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FitnessForm;
