import React from 'react'

export class foodConfig extends React.Component {

    state = {
        list: this.props.list
    }

    removeElement(e) {
        let element = e.currentTarget.id
        let list = this.state.list
        let index = list.indexOf(element)
        list.splice(index, 1)
        this.setState((state) => {
            return {
                list: list
            }
        })
    }

    resetShoppingList() {
        this.setState((state) => {
            return {
                list: [...this.props.olist]
            }
        })
    }

    addItem() {
        let value = document.getElementsByClassName('c-shopping-input')[0].value
        let list = this.state.list
        if (value !== "" && list.indexOf(value) === -1) {
            list.push(value)
            this.setState((state) => {
                return {
                    list: list
                }
            })
            document.getElementsByClassName('c-shopping-input')[0].value = ""
        }
    }

    toFinalShoppingList() {
        this.props.updateShoppingList(this.state.list)
        this.props.toShoppingList()
    }

    render() {
        return (
            <div>
                <h2>📜 Shopping Configurator 📜</h2>
                <h3>Remove the items that have in your fridge</h3>
                <div className="c-shopping-wrapper">
                    <table>
                        <tbody>
                            {this.state.list.map(x =>
                                <tr key={x}>
                                    <th className="c-shopping-point">●</th>
                                    <th className="c-shopping-element">{x}</th>
                                    <th id={x} onClick={(e) => this.removeElement(e)}>X</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="c-shopping-customInput">
                    <input className="c-shopping-input" type="text" placeholder="custom shopping list"/>
                    <div className="c-shopping-button" onClick={() => this.addItem()}>
                        <span>Add</span>
                    </div>
                </div>
                <div className="c-shopping-buttons">
                    <div className="c-shopping-button" onClick={() => this.resetShoppingList()}>
                        <span>Reset</span>
                    </div>
                    <div className="c-shopping-button" onClick={() => this.toFinalShoppingList()}>
                        <span>Proced</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default foodConfig;