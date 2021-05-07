import React from 'react';
import './App.css';


class Survey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "none submitted",
          email: "none submitted",
          currentSit: "none submitted",
          recommended: "none submitted",
          finalComments: "Please enter any final comments",

      };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    }

    mySubmitHandler = (event) => {
        alert("The following has been submitted: \r\n" +
        "Name:\t\t\t" + this.state.name + "\n" + 
        "Email:\t\t\t" + this.state.email + "\n" + 
        "Situation:\t\t" + this.state.currentSit + "\n" + 
        "Recommendations:\t" + this.state.recommended + "\n" + 
        "Comments:\t\t" + this.state.finalComments + "\n");
    }

    render() {
  return (
      <div class ="container">
          <header class = "header">
            <h1 id = "title" class="text-center">IST411 Survey Form</h1>
            <p id="description" class="descriptin-text-center">
                Thank you for taking the time to help us with this survey.
            </p>
          </header>
          
        

      </div>

        
     );
     export default Survey
}
}
