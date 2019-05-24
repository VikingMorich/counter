import { connect } from 'react-redux';
import foodConfig from '../../components/foodConfig';
import { push } from 'connected-react-router'
import { updateShoppingList } from '../../actions/creators/food';

const mapStateToProps = (state) => {
    return {
        food: state.food.platos
    }
}

const mapDispatchToProps = (dispatch) => ({
    toShoppingList: () => dispatch(push('/shopping-list')),
    updateShoppingList: (shoppingList) => dispatch(updateShoppingList(shoppingList)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(foodConfig)