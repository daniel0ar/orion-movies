import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

// Using react router to standarize routes based on folder structure
// as seen in: https://dev.to/franciscomendes10866/file-based-routing-using-vite-and-react-router-3fdo
const components = import.meta.glob("./components/**/*.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(components)) {
    const fileName = path.match(/\.\/components\/(.*)\.jsx$/)?.[1];

    if (!fileName) {
        continue;
    }

    const normalizedPathName = fileName.includes("$")
        ? fileName.replace("$", ":")
        : fileName.replace(/\/index/, "");

    routes.push({
        path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
        Element: components[path].default,
        loader: components[path]?.loader,
        action: components[path]?.action,
        ErrorBoundary: components[path]?.ErrorBoundary,
    });
}

const router = createBrowserRouter(
    routes.map(({ Element, ErrorBoundary, ...rest }) => ({
        ...rest,
        element: <Element />,
        ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    }))
);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;