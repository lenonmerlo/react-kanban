import { createContext, ReactNode, useEffect, useState } from "react";
import { Task } from "../entities/Task";
import { z } from "zod";
import { tasksService } from "../services/api";

const UpdateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "doing", "done"]).optional(),
  priority: z.enum(["low", "medium", "high"]).optional()
})

interface TasksContextData {
  tasks: Task[]
  createTask: (attributes: Omit<Task, "id">) => Promise<Task>
  updateTask: (id: string, attributes: Partial<Omit<Task, "id">>) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

export const TasksContext = createContext({} as TasksContextData)

export const TasksContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    tasksService.fetchTasks().then((data) => setTasks(data))
  }, [])

  const createTask = async (attributes: Omit<Task, "id">) => {
    const newTask = await tasksService.createTask(attributes)
    setTasks ((currentState) => {
        const updatedTasks = [...currentState, newTask]
        return updatedTasks
    })
  }

  const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) => {
    await tasksService.updateTask(id, attributes)
    const parsedAttributes = UpdateTaskSchema.parse(attributes)
    setTasks((currentState) => {
      const updatedTasks = [...currentState]
      const index = updatedTasks.findIndex((task) => task.id === id)
      Object.assign(updatedTasks[index], parsedAttributes)
      return updatedTasks
    })
  }

  const deleteTask = async (id: string) => {
    await tasksService.deleteTask(id)
    setTasks((currentState) => currentState.filter((task) => task.id !== id))
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}