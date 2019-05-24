import { connect } from 'react-redux';
import finalShoppingList from '../../components/finalShoppingList';

const mapStateToProps = (state) => {
    return {
        list: state.food.shoppingList
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(finalShoppingList)