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
                                {this.props.players.filter((id, index) => index % 2 === 0).map((id) => <div key={id} className="complete_arm"></div>)}
                            </div>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0).map((id) => <div key={id} className="hand_arm"></div>)}
                            </div>
                        </>
                    }
                    {this.props.players.length % 2 !== 0 &&
                        <>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0 && (index !== this.props.players.length - 1)).map((id) => <div key={id} className="complete_arm"></div>)}
                                {this.props.players.filter((id, index) => index === this.props.players.length - 1).map((i, index) => <div key={index} className="straight_arm"></div>)}
                            </div>
                            <div>
                                {this.props.players.filter((id, index) => index % 2 === 0 && (index !== this.props.players.length - 1)).map((id) => <div key={id} className="hand_arm"></div>)}
                                {this.props.players.filter((id, index) => index === this.props.players.length - 1).map((i, index) => <div key={index} className="hand_straight_arm"></div>)}
                            </div>
                        </>
                    }
                    {/* SECOND ROUND */}
                    <div>
                        {this.props.players2.map((id) =>
                            <div key={id} className="member2_box">
                                <span className="members">{id}</span>
                            </div>
                        )}
                    </div>
                    {this.props.players2.length % 2 === 0 &&
                        <>
                            <div>
                                {this.props.players2.filter((id, index) => index % 2 === 0).map((id) => <div key={id} className="complete_arm2"></div>)}
                            </div>
                            <div>
                                {this.props.players2.filter((id, index) => index % 2 === 0).map((id) => <div key={id} className="hand_arm2"></div>)}
                            </div>
                        </>
                    }
                    {/* 3TH ROUND*/}
                    <div>
                        {this.props.players3.map((id) =>
                            <div key={id} className="member3_box">
                                <span className="members">{id}</span>
                            </div>
                        )}
                    </div>
                    {this.props.players2.length % 2 === 0 &&
                        <>
                            <div>
                                {this.props.players3.filter((id, index) => index % 2 === 0).map((id) => <div key={id} className="complete_arm3"></div>)}
                            </div>
                            <div>
                                {this.props.players3.filter((id, index) => index % 2 === 0).map((id) => <div key={id} className="hand_arm3"></div>)}
                            </div>
                        </>
                    }
                    {/* 4TH ROUND*/}
                    <div>
                        {this.props.players4.map((id) =>
                            <div key={id} className="member4_box">
                                <span className="members">{id}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <span>Next Round</span>
                </div>
            </div>
        );
    }
};

export default View;
