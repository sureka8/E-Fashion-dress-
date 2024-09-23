import App from "../App";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/Home");

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
         {
            path:'/',
            element:<Home />
         }
        ]
    }
    
])

export default routes