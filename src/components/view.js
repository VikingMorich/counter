import React from 'react'

export class View extends React.Component {
    render() {
        let partialMembers 
        return (
            <div >
                <h1>🥇 Tournament 🥇</h1>
                <div className='battle_camp'>
                    <div>
                        {this.props.players.map((id) => 
                            <div key={id} className="member_box">
                                <span className="members">{id}</span>
                            </div>
                        )}
                    </div>
                    {this.props.players.length % 2 === 0 &&
                        <>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0).map((id) => <div className="complete_arm"></div>)}
                            </div>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0).map((id) => <div className="hand_arm"></div>)}
                            </div>
                        </>
                    }
                    {this.props.players.length % 2 !== 0 &&
                        <>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0 && (index !== this.props.players.length - 1)).map((id) => <div className="complete_arm"></div>)}
                            </div>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0 && (index !== this.props.players.length - 1)).map((id) => <div className="hand_arm"></div>)}
                            </div>
                        </>
                    }

                </div>
            </div>
        );
    }
};

export default View;
