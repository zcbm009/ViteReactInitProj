import router from '@/router/task'
import {  NavLink, RouteObject } from 'react-router-dom'

export default function TaskIndex() {
    const taskRouter = router
    
    const routeLink = taskRouter.map((route: RouteObject, index: number) =>
        <li  key={index}><NavLink to={`${route.path}`}>{route.path}</NavLink></li>)
    return <>
        {routeLink}        
    </>
}