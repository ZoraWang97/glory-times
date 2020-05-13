import React, { Component } from 'react'

class Pictures extends Component {
    render() {
        return (
            <div>
                <img className={this.props.className} src={this.props.src}></img>
        <text>RRP:{this.props.rrp}  Now:{this.props.rrp}</text>
            </div>
        )
    }
}

export default Pictures
