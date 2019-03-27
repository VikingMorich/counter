import { connect } from 'react-redux';
import characters from '../../components/characters';
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
    return {
        characters: state.wolfGame.characters,
        startGame: state.wolfGame.start
    }
}

const mapDispatchToProps = (dispatch) => ({
    backToHome: () => dispatch(push('/wolf-game')),
})

export default connect(mapStateToProps, mapDispatchToProps)(characters);