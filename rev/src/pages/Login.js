function Login(){
    return(
        <div className="login">
        <div className="login-container">
            
            <h2 className="">Welcome back!</h2>


            <input className="input" type="text" placeholder="Enter Your Email"></input>
            <input className="input"  type="password" placeholder="Enter Your Password"></input>
            <input type="button" className="login-btn" value="Log in to Flodesk"></input>
            <p className="login-text"> Not a member?  <a href="./signup.html" className="login-link">Signup</a></p>

            <a href="" className="login-link">Forgot Your password?</a>

            <p className="login-terms">By continuing, you agree to Flodesk's terms
                and acknowledge you've read our privacy policy</p>
        </div>
    </div>
    );
}

export default Login;