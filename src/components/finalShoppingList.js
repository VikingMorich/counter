import React from 'react'

export class finalShoppingList extends React.Component {

    render() {
        return (
            <div>
                <h2>🛒 Shopping List 🛒</h2>
                <div className="c-finalShopping-listBox">
                    <div className="c-finalShopping-listBox-inner">
                        {this.props.list.map(x =>
                            <div className="c-finalShopping-item" key={x}>
                                <span>{x}</span>
                                {x === 'arros' && <span>&nbsp;- 🍚</span>}
                                {x === 'formatge' && <span>&nbsp;- 🧀</span>}
                                {x === 'ou' && <span>&nbsp;- 🥚</span>}
                                {x === 'llet' && <span>&nbsp;- 🥛</span>}
                                {x === 'pollastre' && <span>&nbsp;- 🐔</span>}
                                {x === 'llom' && <span>&nbsp;- 🥩</span>}
                                {x === 'bacon' && <span>&nbsp;- 🥓</span>}
                                {x === 'tonyina' && <span>&nbsp;- 🐟</span>}
                                {x === 'krisia' && <span>&nbsp;- 🦀</span>}
                                {x === 'pastanaga' && <span>&nbsp;- 🥕</span>}
                                {x === 'patata' && <span>&nbsp;- 🥔</span>}
                                {x === 'pa' && <span>&nbsp;- 🥖</span>}
                                {x === 'gambes' && <span>&nbsp;- 🦐</span>}
                                {x === 'hamburguesa' && <span>&nbsp;- 🍔</span>}
                                {x === 'tomaquet' && <span>&nbsp;- 🍅</span>}
                                {x === 'frankfurt' && <span>&nbsp;- 🌭</span>}
                                
                            </div>
                        )}
                    </div>
                </div>
                <div className="c-finalShopping-footer">
                    <span>Take a screenshot and go to the market 🤘🏼😄</span>
                </div>
            </div>
        );
    }
};

export default finalShoppingList;