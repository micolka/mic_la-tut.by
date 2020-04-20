import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = (props) => {

    const onSubmit = (formData) => {
        let {login, password, rememberMe} = formData;
        props.loginMe(login, password, rememberMe);
    };
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

export default Login;