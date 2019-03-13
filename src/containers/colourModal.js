import { connect } from 'react-redux';
import { toggleColourModal } from '../actions/creators/counter';
import ColourModal from '../components/colourModal';

const mapStateToProps = (state) => {
    return {
        playerIds: state.counter.playerIds,
        editableCounter: state.counter.editableCounter
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(toggleColourModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ColourModal);