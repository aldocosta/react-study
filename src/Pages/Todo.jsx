import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                i'm todo
            </div>
        )
    }
}
