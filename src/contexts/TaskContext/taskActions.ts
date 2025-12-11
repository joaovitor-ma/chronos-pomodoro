import type { TaskModel } from "../../models/TaskModel"

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: "RESET_STATE"
} as const
 
export type TaskActionTypes = keyof typeof TaskActionTypes

export type TaskActionModel = {
    type: TaskActionTypes
    payload: TaskModel | null
}