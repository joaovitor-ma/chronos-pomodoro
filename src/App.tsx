import { Container } from "./components/Container"
import { Heading } from "./components/Heading"

import "./styles/theme.css"
import "./styles/global.css"
import { Logo } from "./components/Logo"

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
                    MENU
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
