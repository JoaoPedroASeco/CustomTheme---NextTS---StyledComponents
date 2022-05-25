import styled from 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            ternary: string,
            quaternary: string,

            background: string,
            text: string
        }
    }
}