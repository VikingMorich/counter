import { connect } from 'react-redux';
import Counter from '../components/counter';

const mapStateToProps = (state) => {
    return {
        deadMode: state.counter.deadMode
    }
}

export default connect(
    mapStateToProps
)(Counter)