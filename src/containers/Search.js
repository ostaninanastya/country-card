import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {handleGetCountries, handleCountryFilter} from "../actions/countries"
import SearchBar from '../components/SearchBar'
import {handleShowCountryCard} from '../actions/card'
import {FormattedMessage} from 'react-intl'
import styles from '../style/search.module.css'

class Search extends React.Component {
    componentDidMount() {
        this.props.handleGetCountries();
    }

    showCountryCard = (value) => {
        if (value) {
            this.props.handleShowCountryCard(value);
        }
    }

    filterCountries = (value) => {
        this.props.handleCountryFilter(value.target.value.toLowerCase());
    }

    render() {
        const {countriesFetching, visibleItems, filterValue} = this.props.countries

        return (
            <div>
                <FormattedMessage id="searchComponent.search" defaultMessage="Search">
                    {placeholder =>
                        <input className={styles.searchFieldInputStyle}
                               value={filterValue}
                               onChange={value => this.filterCountries(value)} placeholder={placeholder}/>
                    }
                </FormattedMessage>
                {(countriesFetching) ?
                    <FormattedMessage id="searchComponent.loading" defaultMessage="Loading"/> :
                    <SearchBar data={visibleItems} showCountryCard={value => this.showCountryCard(value)}/>}
            </div>)
    }
}

const mapStateToProps = store => ({
    countries: store.countries
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            handleGetCountries,
            handleShowCountryCard,
            handleCountryFilter
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
