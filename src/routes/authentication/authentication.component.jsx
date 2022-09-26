import './authentication.styles.scss'

import SignUpForm from '../../componenets/sign-up-form/sign-up-form.component';
import SignInForm from '../../componenets/sign-in-form/sign-in-form.component';
const Authentication =() => {
   return (
        <div className='authentication-container'>
            <h1>Sign In Page</h1>
            <SignInForm/>         
            <SignUpForm/>
        </div>
    );
};

export default Authentication;