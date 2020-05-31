import React from "react";
import { Link } from "gatsby";


class CatergoryLinks extends React.Component {
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
        <p onClick={()=>{this.setState({show:!this.state.show})}}>Catagory</p>
            {
                this.state.show? null : <Link to="/categories/reds"><>Reds</></Link>
            }
             {
                this.state.show? null : <Link to="/categories/whites"><>Whites</></Link>
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
export default CatergoryLinks;