import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../store/actions'
import { connect } from 'react-redux'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        prs: state.persons
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: () => dispatch({type: actions.ADD_PERSON}),
        onDeletePerson: (id) => dispatch({type: actions.REMOVE_PERSON, personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);