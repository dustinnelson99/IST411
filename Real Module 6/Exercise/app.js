import React from 'react';
import './index.js';




render() {
    return (
        <h1>Car Survey</h1>
   <form onsubmit="myfunction()"> 
 
      <p> 
What scares you while driving?
      </p>
      <p>
         <input type="checkbox" name="DrunkDrivers">Drunk Drivers
         <input type="checkbox" name="BadWeather">Bad Weather
         <input type="checkbox" name="IcyRoads">Icy Roads
         <input type="checkbox" name="CarMalfunctions">Car Malfunctions
      </p>
      <p>
         How old were you when you got your first car? 
<input type="text" name="UserName" size=35 maxlength=50 value="" required>
      </p>
<p>
   How many tries did it take to get your license?
</p>
      <p> 
         <input type="radio" Id=1 name="Attempts" value=1>1
         <input type="radio" Id=2 name="Attempts" value=2>2
         <input type="radio" Id=3 name="Attempts" value=3>3
         <input type="radio" Id=4 name="Attempts" value=4>4
         <input type="radio" Id=Other name="Attempts" value="Other">Other

         </p>

         <p>

        <p> If you have been in an accident explain what happened. If you have not put NA in the field below:

        </p>
    <TEXTAREA name="Comments" cols=60 rows=6 required></TEXTAREA>

    <p>
   <p>
      Rate your driving abilities:
   </p><p>
   <select id="Dropbox">
      <option value="1"> Bad Driver </option>
      <option value="2"> Okay Driver </option>
      <option value="3"> Good Driver </option>
      <option value="4"> Excellent Driver </option>
   </select>
   </p>
   
   <br>
   <button type ="submit">Submit</button>
}