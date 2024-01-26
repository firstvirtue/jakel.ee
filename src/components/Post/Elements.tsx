import { css } from "@emotion/react"

function H3({ children }) {
    return (
        <h3>{ children }</h3>
    )
}

function Paragraph({ children }) {
    return (
        <p>{ children }</p>
    )
}

function Figure({ children }) {
    return (
        <figure>
            { children }
        </figure>
    )
}

export { H3, Paragraph, Figure }