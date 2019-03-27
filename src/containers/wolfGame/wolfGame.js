import { connect } from 'react-redux';
import wolfGame from '../../components/wolfGame';
import { addPlayer, removePlayer, startGame } from '../../actions/creators/wolfGame';
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
    return {
        players: state.wolfGame.players
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPlayer: (playersUpdated) => dispatch(addPlayer(playersUpdated)),
    removePlayer: (playersUpdated) => dispatch(removePlayer(playersUpdated)),
    startGame: () => (dispatch(startGame()) && dispatch(push('/characters'))),
})

export default connect(mapStateToProps, mapDispatchToProps)(wolfGame);