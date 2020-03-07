import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import './sign-up.styles.scss';


class SignUp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            displayName: '',
            email:'',
            password: '',
            confirmPassword:''

        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});

            this.setState({displayName:'',
                email: '',
                confirmPassword:'',
                password:''});

        }catch (e) {
            console.error(e)
        }
    };

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    };

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>

                <h2 className='title'>Create an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name='displayName' type='text' value={displayName} label='display name' required/>
                    <FormInput handleChange={this.handleChange} name='email' type='email' value={email} label='email' required/>
                    <FormInput handleChange={this.handleChange} name='password' type='password' value={password} label='password' required/>
                    <FormInput handleChange={this.handleChange} name='confirmPassword' type='password' value={confirmPassword} label='confirm password' required/>
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>

            </div>

        )
    }


}

export default SignUp;