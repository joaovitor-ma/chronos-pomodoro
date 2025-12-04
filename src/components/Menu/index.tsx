import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState } from "react"

type availableThemes = "dark" | "light"

export function Menu() {

    const [theme, setTheme] = useState<availableThemes>("dark")

    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault()
        setTheme(currentTheme => currentTheme == "dark" ? "light" : "dark")
    }

    return (
        <nav className={styles.menu}>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Ir para a Home"
                title="Ir para a home"
            >
                <HouseIcon />
            </a>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Ver histórico"
                title="Ver histórico"
            >
                <HistoryIcon />
            </a>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </a>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Mudar tema"
                title="Mudar tema"
                onClick={handleThemeChange}
            >
                <SunIcon />
            </a>
        </nav>
    )
}
