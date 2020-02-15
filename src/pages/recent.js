import React from "react"
import Layout from "../components/layout" 
import RecentBlock from "../components/recentBlock"


export default () => {
    return (
        <Layout location={`recent`}>
            <RecentBlock />
        </Layout>
    )
}