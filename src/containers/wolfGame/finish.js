import { connect } from 'react-redux';
import finish from '../../components/finish';
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
    return {
        startGame: state.wolfGame.start
    }
}

const mapDispatchToProps = (dispatch) => ({
    backToHome: () => dispatch(push('/wolf-game')),
})

export default connect(mapStateToProps, mapDispatchToProps)(finish);