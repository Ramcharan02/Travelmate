// import React from 'react';
// import ReactDOM from 'react-dom/client';
function Poster(){
    return(
    <div style={{width: '100%'}}>
        <div style={{width: '40%', height: '744px', float: 'left', background: '#343538',padding:'120px'}}> 
            <img src={require('./logo.png')} />
        </div>
        <div style={{marginleft: '50%', height: '100px', background: 'white'}}> 
            <header> 
                <h1 style={{textAlign:'center'}}>
                HEllo
                </h1>
                <p style={{textAlign:'center'}}>Already Registered?Login </p>
            </header>
            <div>
            <form onSubmit={""}>
        <label>
          Name:
          <input type="text" value={''} onChange={''} />
        </label>
        <input type="submit" value="Submit" />
      </form>
            </div>
        </div>
    </div>)
}

//  ReactDOM.render(Poster,document.getElementById("root"))

export default Poster;
