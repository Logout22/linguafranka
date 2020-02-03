import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/words")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                {items.map(item => (
                    <li key={`{item.origin}_{item.translation}`}>
                    {item.origin}: {item.translation}
                    </li>
                ))}
                </ul>
            );
        }
    }
}

function QueryForm(props) {
    return (
        <div>
        <p>What do you want to look up?</p>
        <p><input type="text" id="word" /></p>
        <p>
        <select id="srcLng" size="1">
        <option>Deutsch</option>
        </select>
        ↔
        <select id="dstLng" size="1">
        <option>English</option>
        <option>Français</option>
        <option>Italiano</option>
        <option>Español</option>
        </select>
        </p>
        <p><button type="button" onClick={props.onClick}>Search</button></p>
        </div>
    );
}

class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitSearch() {
        this.setState({ results: (<Results />) });
    }

    render() {
        return (
            <div>
            <QueryForm onClick={() => this.submitSearch()}/>
            {this.state.results}            
            </div>
        );
    }
}

ReactDOM.render(
    <Client />,
    document.getElementById('root')
);
