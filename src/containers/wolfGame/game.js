import { connect } from 'react-redux';
import game from '../../components/game';
import { push } from 'connected-react-router';
import { restartVariables } from '../../actions/creators/wolfGame';

const mapStateToProps = (state) => {
    return {
        startGame: state.wolfGame.start,
        activeCharacters: state.wolfGame.activeCharacters,
        playerIndex: state.wolfGame.playerIndex
    }
}

const mapDispatchToProps = (dispatch) => ({
    backToHome: () => dispatch(push('/wolf-game')),
    restartVariables: () => dispatch(restartVariables()),
})

export default connect(mapStateToProps, mapDispatchToProps)(game);