import TaskIndexPage from '@/pages/task/';


const router = [
    {
      path: "/task",
      element: (
        <TaskIndexPage />
      ),
    },
    {
      path: "/task/about",
      element: <div>About</div>,
    },
  ]

export default router