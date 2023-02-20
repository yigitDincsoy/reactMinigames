import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value)
    }

    return(
        <div id ="mycard">

<div class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Login</h2>
  </div>
  
  
  <div class="mdl-card__supporting-text">
   If you already have an account, please log in with user and password.
    <form action="#">
      
      <div id="name">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" ref={userRef} type="text" id="first"/>
    <label class="mdl-textfield__label" for="sample3">Email</label>
  </div>
          {/* <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="last"/>
    <label class="mdl-textfield__label" for="sample3">Last Name</label>
  </div> */}
      </div>
      
      <div id ="contact">
      <div id="phone">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" ref={pwdRef} pattern="-?[0-9]*(\.[0-9]+)?" id="mobile"/>
    <label class="mdl-textfield__label" for="sample2">Password</label>
    <span class="mdl-textfield__error">Mobile must be a number!</span>
  </div>
      </div>
      
       {/* <div id="email"> */}
        {/* <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> */}
    {/* <input class="mdl-textfield__input" type="email"/> */}
    {/* <label class="mdl-textfield__label" for="sample2">E-mail</label> */}
    {/* <span class="mdl-textfield__error">Enter a valid email!</span> */}
  {/* </div> */}
      </div>
      {/* </div> */}

      <button className="mdl-button mdl-button--raised mdl-button-colored">Login</button>
</form>
  </div>
  
  
  
  
</div>

</div>

)
}


export default Login