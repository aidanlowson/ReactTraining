//  Packages
import React, { Component } from 'react';
//  Components
import InputField from './inputComponent/InputField';
import Validation from './validationComp/Validation';
import Char from './char/Char';
//  Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: ''
    }
  }


  handleInput = (event) => {
    this.setState({
      currentValue: event.target.value
    });
  };
  
  handleDelete = (index) => {
    // console.log('Clicked!');
    const text = this.state.currentValue.split('');

    text.splice(index, 1);

    const updatedText = text.join('');
    this.setState({
      currentValue: updatedText
    })
  }

  render() {
  
    const charList = this.state.currentValue.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.handleDelete(index)}
      />
    });
    
    return (
      <div className="App">
        <div>
        <ol>
          <li>Create an input fielda (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        </div>

      <div>
        <InputField
          currentValue={this.state.currentValue}
          onChange={this.handleInput}
        />
        <Validation
          textLength={this.state.currentValue.length}
        />
        {charList}
    </div>
  </div>
    );
  }
}

export default App;
