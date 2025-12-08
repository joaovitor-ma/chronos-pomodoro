import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Heading } from "../../components/Heading";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <CountDown />
                </Heading>
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    )
}