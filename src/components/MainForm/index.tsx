import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
    return (
        <form action="" className="form">
            <div className="formRow">
                <DefaultInput
                    id="meuInput"
                    type="text"
                    labelText="Task"
                    placeholder="Digite algo"
                    defaultValue={"valor preenchido"}
                />
            </div>

            <div className="formRow">
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}