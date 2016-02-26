var Button = React.createClass({

  render: function(){
    return (
      <button onClick={this.props.handleClick}>+1</button>
    )
  }
});

var Result = React.createClass({
  render: function() {
    return (
      <div>{this.props.localCounter}</div>
    )
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {counter: 0};
  },
  handleClick: function(){
    this.setState({this.state.counter +1});
  },
  render: function() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} />
        <Result localCounter={this.state.counter} />
      </div>
    )
  }
});

React.render(<Main />, document.getElementById("root"));
