import { Container } from "./components/Container"
import { Heading } from "./components/Heading"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"

import "./styles/theme.css"
import "./styles/global.css"
import { CountDown } from "./components/CountDown"

export function App() {
    return (
        <>
            <Container>
                <Heading>
                    <Logo />
                </Heading>
            </Container>

            <Container>
                <Heading>
                    <Menu />
                </Heading>
            </Container>

            <Container>
                <Heading>
                    <CountDown />
                </Heading>
            </Container>

            <Container>
                <section>
                    FORM
                </section>
            </Container>

            <Container>
                <section>
                    FOOTER
                </section>
            </Container>
        </>
    )
}
