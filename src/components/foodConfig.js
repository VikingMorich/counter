import React from 'react'

export class foodConfig extends React.Component {
    state = {
        days: [
            {
                "lunch": {
                    "1st": "",
                    "2nd": ""
                },
                "dinner": {
                    "1st": "",
                    "2nd": ""
                }
            }
        ]
    }

    addOneDay () {
        this.setState((state) => {
            let newDays = state.days
            newDays.push({
                "lunch": {
                    "1st": "",
                    "2nd": ""
                },
                "dinner": {
                    "1st": "",
                    "2nd": ""
                }
            })
            return{
                days: newDays
            }
        })
    }

    removeOneDay () {
        this.setState((state) => {
            let newDays = state.days
            newDays.pop()
            return{
                days: newDays
            }
        })
    }

    updateMenus(e) {
        let value = e.currentTarget.value
        let plate = e.currentTarget.id
        let meal = e.currentTarget.parentElement.attributes.meal.value
        let index = e.currentTarget.parentElement.parentElement.attributes.index.value
        this.setState((state) => {
            let currentDays = state.days
            currentDays[index][meal][plate] = value
            return {
                days: currentDays
            }
        })
    }

    takeShoppingList () {
        let shoppingList = []
        let plate
        this.state.days.map((x, index) => 
            Object.keys(x).map(y => 
                Object.keys(this.state.days[index][y]).map(z => {
                    plate = this.state.days[index][y][z]
                    if (plate !== "") {
                        let ingredients = this.props.food[z][plate]
                        ingredients.map(i => {
                            if (shoppingList.indexOf(i) === -1) {
                                shoppingList.push(i)
                            }
                        })
                    }
                }) 
            )
        )
        this.props.updateShoppingList(shoppingList)
        this.props.toShoppingList()
    }

    render() {
        return (
            <div>
                <h2 className="c-food-title">🍱 Food Configurator 🍱</h2>
                {this.state.days.map((x, index) =>
                    <div key={x} index={index} className="c-food-day">
                        <span className="c-food-subtitle"><b>Lunch</b></span>
                        <div className="c-food-wrapper" meal="lunch">
                            <span className="c-food-meal"><b>1st</b></span>
                            <select id="1st" onChange={(e) => this.updateMenus(e)}>
                                <option value="">Select your menu</option>
                                {Object.keys(this.props.food['1st']).map(y =>
                                    <option key={y} value={y}>{y}</option>
                                )}
                            </select>
                        </div>
                        <div className="c-food-wrapper" meal="lunch">
                            <span className="c-food-meal"><b>2nd</b></span>
                            <select id="2nd" onChange={(e) => this.updateMenus(e)}>
                                <option value="">Select your menu</option>
                                {Object.keys(this.props.food['2nd']).map(y =>
                                    <option key={y} value={y}>{y}</option>
                                )}
                            </select>
                        </div>
                        <span className="c-food-subtitle"><b>Dinner</b></span>
                        <div className="c-food-wrapper" meal="dinner">
                            <span className="c-food-meal"><b>1st</b></span>
                            <select id="1st" onChange={(e) => this.updateMenus(e)}>
                                <option value="">Select your menu</option>
                                {Object.keys(this.props.food['1st']).map(y =>
                                    <option key={y} value={y}>{y}</option>
                                )}
                            </select>
                        </div>
                        <div className="c-food-wrapper" meal="dinner">
                            <span className="c-food-meal"><b>2nd</b></span>
                            <select id="2nd" onChange={(e) => this.updateMenus(e)}>
                                <option value="">Select your menu</option>
                                {Object.keys(this.props.food['2nd']).map(y =>
                                    <option key={y} value={y}>{y}</option>
                                )}
                            </select>
                        </div>
                    </div>
                )}
                <div className="c-food-buttons">
                    <div className="c-food-button" onClick={() => this.addOneDay()}>
                        <span>Add a day</span>
                    </div>
                    <div className="c-food-button" onClick={() => this.removeOneDay()}>
                        <span>Remove a day</span>
                    </div>
                    <div className="c-food-button" onClick={() => this.takeShoppingList()}>
                        <span>Proced</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default foodConfig;