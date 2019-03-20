import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Tournament from '../../components/tournament';
import { addPlayer, removePlayer, startTournament} from '../../actions/creators/tournament';

const mapStateToProps = (state) => {
    return {
        players: state.tournament.players
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPlayer: (playerIds) => dispatch(addPlayer(playerIds)),
    removePlayer: (playerIds) => dispatch(removePlayer(playerIds)),
    startTournament: () => dispatch(startTournament()),
    changePage: () => dispatch(push('/tournament/start'))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tournament)