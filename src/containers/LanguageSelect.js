import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import changeLocale from '../actions/locale'
import {EN, RU} from '../reducers/locale'
import style from '../style/locale.module.css'

class LanguageSelect extends React.Component {
    render() {
        return (
            <div className={style.languageButtonContainer}>
                <button className={style.languageButtonStyle} onClick={() => {
                    this.props.dispatch(changeLocale(EN))
                }}>
                    <FormattedMessage id="homeComponent.english" defaultMessage="Default message"/>
                </button>
                <button className={style.languageButtonStyle} onClick={() => {
                    this.props.dispatch(changeLocale(RU))
                }}><FormattedMessage id="homeComponent.russian" defaultMessage="Default message"/></button>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    locale: store.locale
})

export default connect(mapStateToProps)(LanguageSelect);