import React from "react";
import { Link } from "gatsby";


class TagLinks extends React.Component {
  constructor(){
    super();
    this.state={
        show:true
    }
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="col-2">
        <div className="cat-list">
        <p onClick={()=>{this.setState({show:!this.state.show})}}>Tag</p>
            {
                this.state.show? null : <Link to="/"><>Hide and Show</></Link>
            }
             {
                this.state.show? null : <Link to="/"><>Hide and Show</></Link>
            }
          
          {
                this.state.show? null : <Link to="/catalog"><>Hide and Show</></Link>
            }
          
          {
                this.state.show? null : <Link to="/"><>Hide and Show</></Link>
            }
          
          
        </div>

        </div>
       
      </header>
    </div>
  );
}
}
export default TagLinks;