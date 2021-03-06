import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default () => {
    return (
        <Layout 
          location='about' image=''>
            <div dangerouslySetInnerHTML={{__html: `<div class='nar-root' data-post-id='a43331eb-7094-4819-90d3-c6024cd3d59e' style='p {text-align:center;opacity: 0.0;animation: nara 0s ease-in 2s forwards;}@keyframes nara {to {opacity: 1.0;}}' >
  <img style="width:100%;" src="https://content1.getnarrativeapp.com/static/a43331eb-7094-4819-90d3-c6024cd3d59e/featured.jpg">
  <noscript><p>Your Narrative blog will appear here, click preview to see it live.<br>For any issues click <a href="https://help.narrative.so/i/j">here</a></p></noscript>
  <script type="text/javascript" src="https://service.getnarrativeapp.com/core/embed/r/a43331eb-7094-4819-90d3-c6024cd3d59e.js"></script>
</div>`}} />
        </Layout>
    )
}