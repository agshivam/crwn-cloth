import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.componenet";

import { signInAuthUserWithEmailAndPassword ,createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

const defaultFormFields={
    email: '',
    password: '',
};

const SignInForm = () => {
const [formFields ,setFormFields] =useState(defaultFormFields);
const {email ,password } =formFields;
  

const resetFormFields = () => {
  setFormFields(defaultFormFields);
};

const signInWithGoogle =async () => {
  const {user} =await signInWithGooglePopup();
 await createUserDocumentFromAuth(user);
};

const handleSubmit =async(event) => {
    event.preventDefault();
  

      try{
        const response =await signInAuthUserWithEmailAndPassword(email,password);
        console.log(response);
       resetFormFields();
      } 
      catch(error){
        switch(error.code){
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('No user associated with this email');
            break;
          default:
            console.log(error);
            }
        } 

};




const handleChange =(event) => {
 const {name, value} =event.target;

setFormFields({ ...formFields,[name]:value}) ;
};

    return (<div className="sign-up-container">
      <h2>Already have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
           
            <FormInput label="Email" type= "email" onChange= {handleChange} required name= "email" value={email}/><br/>
            <FormInput label="Password"  type= "password" onChange= {handleChange}  name= "password"value={password} required/><br/>
           <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button buttonType='google'  onClick ={signInWithGoogle}>Google sign In</Button>
           </div>
        </form>
    </div>
);
};


export  default SignInForm;