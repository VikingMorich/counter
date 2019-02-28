import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/counter'
import {
    increment,
    decrement
} from '../modules/counter'

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
    players: 1
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            decrement,
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
