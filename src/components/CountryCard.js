import React from 'react'
import {FormattedMessage} from 'react-intl'
import style from '../style/card.module.css'

export default class CountryCard extends React.Component {
    render() {
        return (
            <div className={style.cardContainer}>
                <div className={style.cardFlag}>
                    <img className={style.flagImage} src={this.props.data.flag} alt=""/>
                </div>
                <h2 className={style.cardTitle}>{this.props.data.name}</h2>

                <div className={style.cardLabel}><FormattedMessage id="cardComponent.capital"
                                                                   defaultMessage="Capital"/></div>
                <span className={style.cardContent}>{this.props.data.capital}</span>
                <div className={style.cardLabel}>
                    <FormattedMessage id="cardComponent.region" defaultMessage="Population"/>
                </div>
                <span className={style.cardContent}> {this.props.data.region}</span>
                <div className={style.cardLabel}>
                    <FormattedMessage id="cardComponent.population" defaultMessage="Population"/>
                </div>
                <span className={style.cardContent}> {this.props.data.population.toLocaleString()}</span>
            </div>
        )
    }
}