import { connect } from 'react-redux';
import Counter from '../components/counter';
import { updateCounters, setLeader, toggleColourModal } from '../actions/creators/counter';

const mapStateToProps = (state) => {
    return {
        deadMode: state.counter.deadMode,
        playerIds: state.counter.playerIds,
        markLeader: state.counter.markLeader,
        playerPoints: state.counter.playerPoints,
        leaderId: state.counter.leaderId,
        markLeader: state.counter.markLeader,
        editableColours: state.counter.editableColours
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCounters: (newCounters) => dispatch(updateCounters(newCounters)),
    setLeader: (leader) => dispatch(setLeader(leader)),
    toggleColourModal: (id) => dispatch(toggleColourModal(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)