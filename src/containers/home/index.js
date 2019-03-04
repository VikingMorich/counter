import { push } from 'connected-react-router'
import {connect} from 'react-redux';
import Home from '../../components/home';
import {addCounter, removeCounter} from '../../actions/creators/counter'

const mapStateToProps = (state) => {
    return {
        playerIds: state.counter.playerIds,
        startingCount: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => ({
      changePage: () => dispatch(push('/about-us')),
      addCounter: (counterIds) => dispatch(addCounter(counterIds)),
      removeCounter: (counterIds) => dispatch(removeCounter(counterIds))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)