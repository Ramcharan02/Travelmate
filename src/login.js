import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/login.css'
function Poster(){
    return(
      <div>
      <div class="split left">
        <div className="centered"> 
            <img src={require('./logo.png')} />
            </div>
      </div>

      <div class="split right">
            <header> 
                <h1 className='h1'>
                Create Login
                </h1>
                <p style={{textAlign:'center'}}>Already Registered?Login </p>
            </header>
      <hr/>      
      <div className='centered'>      
      <form onSubmit={""}>
        <label>
        Full Name
          <input type="text" value={''} onChange={''} />
        </label>
        <label>
        Email
          <input type="text" value={''} onChange={''} />
        </label>
        <label>
        Enter Password
          <input type="text" value={''} onChange={''} />
        </label>
        <label>
        Date of Birth
          <input type="text" value={''} onChange={''} />
        </label>
        <button>Sign up</button> 
      </form>
      </div>
    </div>  
    </div>
)
}

//  ReactDOM.render(Poster,document.getElementById("root"))

export default Poster;
