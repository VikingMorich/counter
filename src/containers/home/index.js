import { push } from 'connected-react-router'
import {connect} from 'react-redux';
import Home from '../../components/home';
import {addCounter, removeCounter, toggleModal, setLeader, updateCounters} from '../../actions/creators/counter'

const mapStateToProps = (state) => {
    return {
        playerIds: state.counter.playerIds,
        playerPoints: state.counter.playerPoints,
        startingCount: state.counter.count,
        modalActive: state.counter.modalActive,
        customNames: state.counter.customNames
    }
}

const mapDispatchToProps = (dispatch) => ({
      changePage: () => dispatch(push('/about-us')),
      addCounter: (counterIds) => dispatch(addCounter(counterIds)),
      removeCounter: (counterIds) => dispatch(removeCounter(counterIds)),
      toggleModal: () => dispatch(toggleModal()),
      setLeader: (leader) => dispatch(setLeader(leader)),
      updateCounters: (newCounters) => dispatch(updateCounters(newCounters))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)