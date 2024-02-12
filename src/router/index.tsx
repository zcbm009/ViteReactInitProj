import { createBrowserRouter } from "react-router-dom";
import TaskRouterList from '@/router/task.tsx'
import TaskPage from '@/pages/task/index.tsx'
const routerList = [
    {
        path: "/",
        element: (
            <>
                这是首页
            </>
        )
    },
    // {
    //     path: "/task",
    //     element: (
    //         <>
    //             <TaskPage />
    //         </>
    //     )
    // }
]


const router = createBrowserRouter([...routerList, ...TaskRouterList])
export default router