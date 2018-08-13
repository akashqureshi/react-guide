import React, {Component} from "react";
import Person from "../components/Persons/Person/Person";
import clagisses from "./App.css";
import ValidationComponent from '../components/ValidationComponent/ValidationComponent'
import CharComponent from '../components/CharComponent/CharComponent'
class App extends Component {
    state = {
        persons: [
            {id: "jakj1", name: "Akash", age: 24},
            {id: "jaja2", name: "Haseeb", age: 22},
            {id: "dkdh1", name: "Usama", age: 17}
        ],
        showStatus: false,
        otherState: ''
    };
    deletePersonHandler = personIndex => {
        //  const delPerson=this.state.person.slice();
        const delPerson = [...this.state.persons];
        delPerson.splice(personIndex, 1,);
        this.setState({persons: delPerson});
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const status = this.state.showStatus;
        this.setState({showStatus: !status});
    };
    changeEventHandler = (event) => {
        this.setState({otherState: event.target.value});
    }

    delCharHandler = (index) => {
        const indexChar = this.state.otherState.split('');
        indexChar.splice(index, 1);
        const updatedString = indexChar.join('');
        this.setState({otherState: updatedString})
    }

    render() {
        let person = null;
        let buttonClass = '';
        if (this.state.showStatus) {
            person = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (

                                <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    key={person.id}
                                    age={person.age}
                                    change={(event) => this.nameChangeHandler(event, person.id)}
                                />
                        );
                    })}
                </div>
            );
            buttonClass = classes.Red;
        }
        const charComponent = this.state.otherState.split('').map((ch, index) => {
            return <CharComponent delChar={() => this.delCharHandler(index)} charInput={ch} key={index}/>
        });
        let AssignedClasses = [];
        if (this.state.persons.length <= 1) {
            AssignedClasses.push(classes.Bold)
        }
        if (this.state.persons.length <= 2) {
            AssignedClasses.push(classes.Red);
        }

        return (
            <div className={classes.App}>
                <h1>Hi I am a react app</h1>
                <p className={AssignedClasses.join(' ')}>This is Realy a great</p>
                <button
                    className={buttonClass}
                    onClick={this.togglePersonHandler}
                >Toggle persons
                </button>
                {person}
                <hr/>
                <input
                    onChange={this.changeEventHandler}
                    value={this.state.otherState}
                    type="text"
                />
                <p>{this.state.otherState}</p>
                <ValidationComponent
                    lengthPara={this.state.otherState.length}
                />
                {charComponent}
            </div>
        );
    }
}

export default App;
