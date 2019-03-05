import { connect } from 'react-redux';
import Configuration from '../../components/configuration';
import { changeInitialValue, enableDeadMode, disableDeadMode } from '../../actions/creators/counter'

const mapStateToProps = (state) => {
    return {
        startingCount: state.counter.count,
        deadMode: state.counter.deadMode
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeInitialValue: (value) => dispatch(changeInitialValue(value)),
    enableDeadMode: () => dispatch(enableDeadMode()),
    disableDeadMode: () => dispatch(disableDeadMode())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configuration)