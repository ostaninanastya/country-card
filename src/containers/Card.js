import React from 'react'
import {connect} from 'react-redux'
import CountryCard from "../components/CountryCard";

class Card extends React.Component {
    render() {
        const {showCard, card} = this.props.card
        return <div>
            {showCard && <CountryCard data={card}/>}
        </div>
    }
}

const mapStateToProps = store => ({
    card: store.card
})

export default connect(
    mapStateToProps
)(Card)