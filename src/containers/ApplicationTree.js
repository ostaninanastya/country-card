import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';
import languageObject from '../translations/messages';

import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';
import CountrySearch from "./Search";
import Card from "./Card";
import LanguageSelect from "./LanguageSelect";

addLocaleData(ru);
addLocaleData(en);

export const ApplicationTree = (props) => {
    return (
        <IntlProvider locale={props.locale} messages={languageObject[props.locale]} key={props.locale}>
            <div className="container">
                <div className="searchContainer">
                    <CountrySearch/>
                    <LanguageSelect/>
                </div>
                <Card/>
            </div>
        </IntlProvider>
    );
};

ApplicationTree.defaultProps = {
    locale: 'en',
};

ApplicationTree.propTypes = {
    locale: PropTypes.string,
};

const mapStateToProps = state => ({locale: state.localeReducer.locale});

export default connect(mapStateToProps)(ApplicationTree);