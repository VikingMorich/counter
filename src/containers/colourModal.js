import { connect } from 'react-redux';
import { toggleColourModal, updateCounterColours, addCounter, removeCounter, setLeader, updateCounters} from '../actions/creators/counter';
import ColourModal from '../components/colourModal';

const mapStateToProps = (state) => {
    return {
        playerIds: state.counter.playerIds,
        editableCounter: state.counter.editableCounter,
        playerColours: state.counter.playerColours,
        startingCount: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(toggleColourModal()),
    updateCounterColours: (newColours) => dispatch(updateCounterColours(newColours)) && dispatch(toggleColourModal()),
    addCounter: (counterIds) => dispatch(addCounter(counterIds)),
    removeCounter: (counterIds) => dispatch(removeCounter(counterIds)),
    setLeader: (leader) => dispatch(setLeader(leader)),
    updateCounters: (newCounters) => dispatch(updateCounters(newCounters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColourModal);