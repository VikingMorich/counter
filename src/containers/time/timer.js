import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import Timer from '../../components/timer';

const mapStateToProps = (state) => {
    return {
        futureDate: state.time.finalDate,
        title: state.time.title
    }
}

const mapDispatchToProps = (dispatch) => ({
    toCelebrate: () => dispatch(push('/celebrate')),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)