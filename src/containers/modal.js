import { connect } from 'react-redux';
import { toggleModal, addCounter, updateCounterColours } from '../actions/creators/counter';
import Modal from '../components/modal';

const mapStateToProps = (state) => {
    return {
        playerIds: state.counter.playerIds,
        playerColours: state.counter.playerColours
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeAndAddModal: (counterIds) => dispatch(toggleModal()) && dispatch(addCounter(counterIds)),
    closeModal: () => dispatch(toggleModal()),
    updateCounterColours: (newColours) => dispatch(updateCounterColours(newColours))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);