import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import changeLocale from "../actions/locale";
import {EN, RU} from "../reducers/locale";

class LanguageSelect extends React.Component {
    render() {
        return (
            <div className="languageButtonContainer">
                <button className="languageButtonStyle" onClick={() => {
                    this.props.dispatch(changeLocale(EN))
                }}>
                    <FormattedMessage id="homeComponent.english" defaultMessage="Default message"/>
                </button>
                <button className="languageButtonStyle" onClick={() => {
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