import { useInput } from "../hooks/useInput";
import { isEmail } from "../util/validation";
import Input from "./Input";
export default function Login() {
  const{value:emailValue,handleValueChange:handleEmailChange,handleInputBlur:handleEmailBlur,hasError:emailError}=useInput('',isEmail);
  const emailIsInvalid= Blur.email&&!values.email.includes('@');
  function handleSubmit(event){
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input id="email" type="email" name="email" label="Email" onBlur={handleEmailBlur} error={emailIsInvalid&&'please enter a valid email'} onChange={handleEmailChange} value={emailValue} ></Input>
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" onBlur={()=>handleInputBlur('email')} type="email" name="email" onChange={(event)=>handleValueChange('email',event)} value={values.email} />
          <div className="control-error">
            {emailIsInvalid && <p>please enter a valid email address</p>}
          </div>
        </div> */}

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleValueChange('password',event)} value={values.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
