import { connect } from 'react-redux';
import View from '../../components/view';

const mapStateToProps = (state) => {
    return {
        players: state.tournament.players,
        players2: state.tournament.players2,
        players3: state.tournament.players3,
        players4: state.tournament.players4
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View)