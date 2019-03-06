import { connect } from 'react-redux';
import Configuration from '../../components/configuration';
import { changeInitialValue, enableDeadMode, disableDeadMode, enableCustomNames, disableCustomNames, enableLeader, disableLeader } from '../../actions/creators/counter'

const mapStateToProps = (state) => {
    return {
        startingCount: state.counter.count,
        deadMode: state.counter.deadMode,
        customNames: state.counter.customNames,
        markLeader: state.counter.markLeader
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeInitialValue: (value) => dispatch(changeInitialValue(value)),
    enableDeadMode: () => dispatch(enableDeadMode()),
    disableDeadMode: () => dispatch(disableDeadMode()),
    enableCustomNames: () => dispatch(enableCustomNames()),
    disableCustomNames: () => dispatch(disableCustomNames()),
    enableLeader: () => dispatch(enableLeader()),
    disableLeader: () => dispatch(disableLeader())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configuration)