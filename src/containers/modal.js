import { connect } from 'react-redux';
import { toggleModal } from '../actions/creators/counter';
import Modal from '../components/modal'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(toggleModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);