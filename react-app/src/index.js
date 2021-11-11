import React from 'react';
import ReactDOM from 'react-dom';

class DemoHttp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          greeting: null
        };
      }

    componentDidMount() {
    fetch("http://localhost:9000")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                isLoaded: true,
                greeting: result.greeting
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, greeting } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
            <h1>
                {greeting}
            </h1>
            );
        }
    }
}

ReactDOM.render(<DemoHttp />, document.getElementById("root"));