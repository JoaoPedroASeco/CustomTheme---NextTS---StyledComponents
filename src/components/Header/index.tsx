import { NextPage } from "next";
import { useContext, useState } from "react";
import Switch from 'react-switch'
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

type HeaderType = {
    toggleTheme: () => void
}

const Header = ({ toggleTheme }: HeaderType) => {
    const [isToggled, setIsToggled] = useState(false)
    const { colors } = useContext(ThemeContext)

    const handleToggle = () => {
        setIsToggled(!isToggled)
    }

    return (
        <Container>
            Hellow Header

            <Switch 
                onChange={() => {
                    handleToggle()
                    toggleTheme()
                }}
                checked={isToggled}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.ternary)}
                onColor={colors.secondary}
            />
        </Container>
    )
}

export default Header