import React, { Component } from 'react'

class Layer extends Component {

  render() {
    return (
      <div id="parameter">
          
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.smartContractFunctionName(this.inputVariable.value)
        }}>
          <input
            id="newInput"
            ref={(input) => {
              this.inputVariable = input
            }}
            type="text"
            className="form-control"
            placeholder=" Enter Notice"
            required />
          <input type="submit" hidden={true} />
        </form>
           
      </div>
    );
  }
}

export default Layer;