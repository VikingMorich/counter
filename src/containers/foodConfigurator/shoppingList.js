import { connect } from 'react-redux';
import shoppingList from '../../components/shoppingList';
import { push } from 'connected-react-router';
import { updateShoppingList } from '../../actions/creators/food';

const mapStateToProps = (state) => {
    return {
        list: state.food.shoppingList,
        olist: [...state.food.shoppingList]
    }
}

const mapDispatchToProps = (dispatch) => ({
    toShoppingList: () => dispatch(push('/final-shopping-list')),
    updateShoppingList: (shoppingList) => dispatch(updateShoppingList(shoppingList)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(shoppingList)