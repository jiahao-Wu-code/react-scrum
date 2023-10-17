import React from 'react'

export default function LoginWrap(props) {
    return (
        <div className="login-wrap">
            <header className="css-Jira"></header>
            <div className="login-box-wrap">{props.children}</div>
        </div>
    )
}
