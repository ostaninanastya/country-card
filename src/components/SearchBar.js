import React from 'react';
import style from '../style/search.module.css'

export default class SearchBar extends React.Component {
    render() {
        return (
            <ul className={style.searchResultStyle}>
                {this.props.data.slice(0, 24).map(item => (
                    <li className={style.searchBarItem} key={item.numericCode} onClick={() => {
                        this.props.showCountryCard(item)
                    }}>
                        {item.name}
                    </li>
                ))}
            </ul>
        )
    }
}
