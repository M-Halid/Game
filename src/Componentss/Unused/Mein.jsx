import React, {
  Component
} from "react";
import "../Mein.css";

class Mein extends Component {
  state = {
    change: false,
    show: false,
    msg2: "Type your Name",
    shw: "show It!",
    shw2: "Hide It!"
  };

  changeit() {
    this.setState({
      change: !this.state.change,
      message: "It's Done Duuude"
    });
  }
  showit() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    //Destructing
    const {
      message,
      show,
      change,
      msg2,
      shw,
      shw2
    } = this.state;

    return (<div id="planecont" >
      <button onClick={
        () => this.showit()
      }
        className="btn btn-primary" > {
          show ? shw2 : shw
        } </button> {
        show ? change ? < h2 > {
          message
        } </h2> : <h2>{msg2}</h2 > : null
      }

      {
        show ? < input type="name"
          id="inp1" /> : null
      } <
        br />

      {
        show ? (<button id="chng"
          onClick={
            () => this.changeit()
          }
          className="btn btn-success" >
          {
            "Change It!"
          } </button>
        ) : null
      } <
        br />
      <
        i className="fas fa-plane-departure" > </i>
    </div>
    );
  }
}

export default Mein;