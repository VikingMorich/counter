import { connect } from 'react-redux';
import View from '../../components/view';

const mapStateToProps = (state) => {
    return {
        players: state.tournament.players
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View)