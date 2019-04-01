import { connect } from 'react-redux';
import characters from '../../components/characters';
import { push } from 'connected-react-router'
import { updateActiveCharacters, setPlayerRols } from '../../actions/creators/wolfGame';

const mapStateToProps = (state) => {
    return {
        characters: state.wolfGame.characters,
        fixedCharacters: state.wolfGame.fixedCharacters,
        startGame: state.wolfGame.start,
        activeCharacters: state.wolfGame.activeCharacters,
        gameRules: state.wolfGame.gameRules,
        players: state.wolfGame.players,
        charactersRelation: state.wolfGame.charactersRelation
    }
}

const mapDispatchToProps = (dispatch) => ({
    backToHome: () => dispatch(push('/wolf-game')),
    updateActiveCharacters: (newCharacters) => dispatch(updateActiveCharacters(newCharacters)),
    startPlaying: () => dispatch(push('/game')),
    setPlayerRols: (playerRols) => dispatch(setPlayerRols(playerRols))
})

export default connect(mapStateToProps, mapDispatchToProps)(characters);