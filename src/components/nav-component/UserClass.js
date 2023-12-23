import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h1> Count : {count}</h1>
                <h1>Hello</h1>
                <h2>This is Class Component</h2>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Increase</button>
            </div>
        )
    }
}

export default UserClass;