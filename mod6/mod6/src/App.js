import React from 'react';
import './index.css';
class Survey extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"None submitted",
      email:"None submitted",
      selection: "None Selected",
      tech:'Please enter any final comments'
    };
  }

  myChangeHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  }

  mySubmitHandler = (event) => {
    alert("These have been Submitted: \r\n" +
    "   Name:\t\t\t" + this.state.name + "\n" +
    "   Email:\t\t\t" + this.state.email + "\n" +
    "   Situation:\t\t\t" + this.state.selection + "\n" +
    "   Recommendations:\t\t\t" + this.state.invent + "\n" +
    "   Comments:\t\t\t" + this.state.tech + "\n");
  }
  render() {
    return(
      <div class="container">
        <header class="header">

        <h1>What Scares you While Driving</h1>

        </header>
        <form id='surveyForm' onSubmit={this.mySubmitHandler}>
          <div class='form-section'>
            <label for="firstName"> First Name:</label>
            <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your name (required)"
            onChange={this.myChangeHandler}
            />
          </div>
          <div class='form-section'>
            <label for="email"> Email:</label>
            <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email(required)"
            onChange={this.myChangeHandler}
            />
          </div>
          <div class='form-section'>
            <h4>Have you been in a car accidenent?</h4>
            <select id="selection" name="selection" class = "form-control" value={this.state.selection} onchange={this.myChangeHandler}>
              <option selected value="None selected">Make Your Choice</option>
              <option value="past">Yes</option>
              <option value="future">No</option>
            </select>
          

          </div>
          <div class='form-section'>
            <p>How many tries did it take to get your license?</p>
            <input
              name='attempt'
              value='1'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />First Attempt
            <input
              name='attempt'
              value='2'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Second Attempt
            <input
              name='attempt'
              value='3'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Third Attempt
             <input
              name='attempt'
              value='4'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
              />Fourth Attempt
              <input
              name='attempt'
              value='Other'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Other





          </div>

          <div class='form-section'>
            <h4>If you have been in an accident please describe what happened if you feel comfortable sharing.</h4>
            <textarea
            name='tech'
            class="input-textarea"
            value={this.state.tech}
            onChange={this.myChangeHandler}
            />
            

          </div>
          <div class='form-section'>
            <button type="submit" id="submit-button">
                Submit
            </button>
          </div>

          

        </form>


      </div>

      
      
    );    
  }
}
export default Survey;