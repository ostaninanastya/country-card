import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class CountryCard extends React.Component {
    render() {
        return (
            <div className="cardContainerStyle">
                <div className="fullWidth">
                    <img className="flagStyle" src={this.props.data.flag}/>
                </div>
                <h2 className="cardTitle">{this.props.data.name}</h2>

                <div className="cardLabel"><FormattedMessage id="cardComponent.capital"
                                                            defaultMessage="Capital"/></div>
                <span className="cardLabel cardContent">{this.props.data.capital}</span>
                <div className="cardLabel">
                    <FormattedMessage id="cardComponent.region" defaultMessage="Population"/>
                </div>
                <span className="cardLabel cardContent"> {this.props.data.region}</span>
                <div className="cardLabel">
                    <FormattedMessage id="cardComponent.population" defaultMessage="Population"/>
                </div>
                <span className="cardLabel cardContent"> {this.props.data.population.toLocaleString()}</span>
            </div>
        )
    }
}