import { Component } from 'react';

class New extends Component {

    constructor() {
      super();
      this.state = {newMovieId: null};
    }
  
    render() {
      return (
        <div>
            New Movie works!
        </div>
      )
    }
  }
  
  export default New;