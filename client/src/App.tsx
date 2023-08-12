import './App.css'
import Layout from "./components/templates/layout/Layout.tsx";
import AppRoutes from "./routes/route";
function App() {

  return (
    <>
        <Layout>
           <AppRoutes/>
        </Layout>
    </>
  )
}

export default App
