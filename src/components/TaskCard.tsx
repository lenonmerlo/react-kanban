import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes"
import { Task, TaskPriority, TaskStatus } from "../entities/Task"
import { useTasks } from "../hooks/useTasks"

interface TaskCardProps {
    task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const { deleteTask, updateTask } = useTasks()
    const getActionText = (status: TaskStatus) => {
        const actionsTexts = {
            "todo": "Iniciar",
            "doing": "Concluír",
            "done": "Arquivar"
        }
        return actionsTexts[status]
    }

    const getActionColor = (status: TaskStatus) => {
        const actionsColors: { [key: string]: "indigo" | "green" | "bronze" } = {
            "todo": "indigo",
            "doing": "green",
            "done": "bronze"
        }
        return actionsColors[status]
    } // ✅ Corrigido fechamento

    const getPriorityColor = (priority: TaskPriority) => {
        const priorityColors: { [key: string]: "sky" | "amber" | "tomato" } = {
            "low": "sky",
            "medium": "amber",
            "high": "tomato"
        }
        return priorityColors[priority]
    }

    const handleDelete = (id: string) => {
        const confirmation = confirm("Tem certeza que deseja excluir esta tarefa?")
        if (confirmation) {
            deleteTask(id)
        }
    }

    const handleUpdate = () => {
        if (task.status === "todo") {
            updateTask(task.id, { status: "doing" })
        } else if (task.status === "doing") {
            updateTask(task.id, { status: "done"})
        }
    }

    return (
        <Card>
            <Flex align="center" gap="4">
                <Text weight="bold">{task.title}</Text>
                <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
            </Flex>

            <Text as="p" my="4" size="1">{task.description}</Text>

            <Flex gap="2">
                {task.status !== "done" && (
                        <Button color={getActionColor(task.status)} onClick={handleUpdate}>{getActionText(task.status)}</Button>
                    )}
                <Button color="red" onClick={()=> handleDelete(task.id)}>Excluir</Button>
            </Flex>
        </Card>
    )
} // ✅ Este fechamento estava correto
