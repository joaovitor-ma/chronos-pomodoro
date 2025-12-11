import { useRef } from "react";

import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {

    const { state, setState } = useTaskContext()

    const taskNameRef = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!taskNameRef.current) return

        const taskName = taskNameRef.current.value.trim()

        if (!taskName) {
            alert("Digite o nome da tarefa")
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [
                    ...prevState.tasks, newTask
                ],
                config: {
                    ...prevState.config
                }
            }
        })
    }

    function handleInterruptTask() {
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: "00:00",
            }
        })
    }

    return (
        <form onSubmit={handleCreateNewTask} action="" className="form">
            <div className="formRow">
                <DefaultInput
                    id="meuInput"
                    type="text"
                    labelText="Task"
                    placeholder="Digite algo"
                    ref={taskNameRef}
                    disabled={!!state.activeTask}
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
                {
                    !state.activeTask ? (
                        <DefaultButton
                            ria-label="Iniciar nova tarefa"
                            title="Iniciar nova tarefa"
                            type="submit"
                            icon={<PlayCircleIcon />}
                            key="submit_button"
                        />
                    ) : (
                        <DefaultButton
                            ria-label="Interromper tarefa atual"
                            title="Interromper tarefa atual"
                            type="button"
                            color="red"
                            icon={<StopCircleIcon />}
                            onClick={handleInterruptTask}
                            key="button_button"
                        />
                    )
                }
            </div>
        </form>
    )
}