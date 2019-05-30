import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import TimerConfig from '../../components/timerConfig';
import { setFinalDate, setTitle } from '../../actions/creators/time';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
    toTimer: () => dispatch(push('/timer')),
    setFinalDate: (date) => dispatch(setFinalDate(date)),
    setTitle: (title) => dispatch(setTitle(title)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerConfig)