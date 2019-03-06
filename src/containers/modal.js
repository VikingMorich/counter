import { connect } from 'react-redux';
import { toggleModal, addCounter } from '../actions/creators/counter';
import Modal from '../components/modal';

const mapStateToProps = (state) => {
    return {
        playerIds: state.counter.playerIds
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeAndAddModal: (counterIds) => dispatch(toggleModal()) && dispatch(addCounter(counterIds)),
    closeModal: () => dispatch(toggleModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);