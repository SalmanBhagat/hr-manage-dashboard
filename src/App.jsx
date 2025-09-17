import { RouterProvider } from "react-router-dom"
import { routes } from "./@core/router/Routing"

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App