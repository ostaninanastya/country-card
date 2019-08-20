import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
            <ul className="searchResultStyle">
                {this.props.data.slice(0, 24).map(item => (
                    <li className="searchBarItem" key={item.numericCode} onClick={() => {
                        this.props.showCountryCard(item)
                    }}>
                        {item.name}
                    </li>
                ))}
            </ul>
        )
    }
}
