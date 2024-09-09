import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Dashboard from "./dashboard/Dashboard"
import SecondaryNav from "../components/navbar/secondaryNav/SecondaryNav"

const Page = () => {
    return (
        <Layout className="space-y-8 overflow-y-scroll">
            {/* Secondary Navbar */}
            <SecondaryNav />

            {/* Routing or content */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Layout>
    )
}

export default Page