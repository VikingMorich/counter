import { connect } from 'react-redux';
import Configuration from '../../components/configuration';
import { changeInitialValue, enableDeadMode, disableDeadMode, enableCustomNames, disableCustomNames } from '../../actions/creators/counter'

const mapStateToProps = (state) => {
    return {
        startingCount: state.counter.count,
        deadMode: state.counter.deadMode,
        customNames: state.counter.customNames
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeInitialValue: (value) => dispatch(changeInitialValue(value)),
    enableDeadMode: () => dispatch(enableDeadMode()),
    disableDeadMode: () => dispatch(disableDeadMode()),
    enableCustomNames: () => dispatch(enableCustomNames()),
    disableCustomNames: () => dispatch(disableCustomNames())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configuration)