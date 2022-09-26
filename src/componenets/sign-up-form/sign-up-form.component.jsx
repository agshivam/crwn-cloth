import { async } from "@firebase/util";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.componenet";

import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
const defaultFormFields={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
const [formFields ,setFormFields] =useState(defaultFormFields);
const { displayName ,email ,password ,confirmPassword} =formFields;
  
console.log(formFields);

const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

const handleSubmit =async(event) => {
    event.preventDefault();
    if(password !== confirmPassword){
        alert("password do not match");
        return;
        }

      try{
        const { user }= await createAuthUserWithEmailAndPassword(
          email,password);
       // console.log(response);
        await createUserDocumentFromAuth(user, {displayName});
        resetFormFields();
      } 
      catch(error){
        if(error.code ==='auth/email-already-in-use'){
          alert('cannot create user ,email alreadfy in use');
      }
      else{
      
        console.log('user creation encountered an error', error);
      } 

}
};
const handleChange =(event) => {
 const {name, value} =event.target;

setFormFields({ ...formFields,[name]:value}) ;
};
    return (<div className="sign-up-container">
      <h2>Don't have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
           
            <FormInput label="Display Name" type= "text"  onChange= {handleChange} name= "displayName" value={displayName} required/><br/>
            <FormInput label="Email" type= "email" onChange= {handleChange} required name= "email" value={email}/><br/>
            <FormInput label="Password"  type= "password" onChange= {handleChange}  name= "password"value={password} required/><br/>
            <FormInput label="Confirm Password"  type= "password" onChange= {handleChange}  name= "confirmPassword" value={confirmPassword} required/><br/>
            
            <Button type="submit">Sign Up</Button><br/>
        </form>
    </div>
);
};

export  default SignUpForm;