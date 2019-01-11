
var Counter = React.createClass({
    getDefaultProps: function() {
        return {
            default: 0
        }
    },
    
    getInitialState: function() {
        return {
            counter: 0,
        };
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    componentWillMount: function() {
        console.log('Data loading');
    },
    
    componentWillReceiveProps: function() {
        console.log('Update state of counter');
    },
    
    componentWillUpdate: function() {
        console.log('The component has been updated');
    },

    render: function() {
        return React.createElement('div', {className: 'counters'},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('br', {}),
            React.createElement('br', {}),
            React.createElement('button', {onClick: this.increment}, '   +1   '),
            React.createElement('button', {onClick: this.decrement}, '   -1   ')
        );
    },
    
    componentDidMount: function() {
        console.log('Displayed component is already visible in the DOM tree');
    },
    
    componentWillUnmount: function() {
        console.log('The component has been unmount');
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));