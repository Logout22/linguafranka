import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Results extends React.Component {
    render() {
        return (
            <div>
            {/* TODO */}
            </div>
        );
    }
}

class QueryForm extends React.Component {
    submitSearch()
    {
    }

    render() {
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
            <p><button type="button" onClick={() => this.submitSearch()}>Search</button></p>
            </div>
        );
    }
}

class Client extends React.Component {
    render() {
        return (
            <div>
            <QueryForm />
            <Results />
            </div>
        );
    }
}

ReactDOM.render(
    <Client />,
    document.getElementById('root')
);
