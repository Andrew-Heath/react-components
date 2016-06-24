class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onLIClick(event) {
    this.setState({
      done: !this.state.done,
    });

    console.log(this.props.item + ' was clicked', this);
  };

  onLIMouseEnter(event) {
    this.setState({
      hover: true
    });
  }

  onLIMouseLeave(event) {
    this.setState({
      hover: false
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : '',
      fontWeight: this.state.hover ? 'bold' : ''
    };

    return (
      <li style={style}
          onClick={this.onLIClick.bind(this)}
          onMouseEnter={this.onLIMouseEnter.bind(this)}
          onMouseLeave={this.onLIMouseLeave.bind(this)}>
        {this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

var ListHolder = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Milk', 'Bread', 'Eggs', 'Sugar']}/>
  </div>
);

ReactDOM.render(<ListHolder />, document.getElementById('app'));

