import React from 'react'
import MetaTags from 'react-meta-tags';

function AppHeaders() {
    return(
        <div>
            <MetaTags>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width' />
                <title>Kanma - Personal Finance</title>
                <title>Kanma - Personal Finance</title>
                <meta name="title" content="Kanma - Personal Finance"/>
                <meta name="description" content="Track and manage your investments and subscriptions."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="http://kanma.herokuapp.com/"/>
                <meta property="og:title" content="Kanma - Personal Finance"/>
                <meta property="og:description" content="Track and manage your investments and subscriptions."/>
                <meta property="og:image" content="https://user-images.githubusercontent.com/25686023/155740270-208e9079-a139-4810-b02c-2977c602919d.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="http://kanma.herokuapp.com/"/>
                <meta property="twitter:title" content="Kanma - Personal Finance"/>
                <meta property="twitter:description" content="Track and manage your investments and subscriptions."/>
                <meta property="twitter:image" content="https://user-images.githubusercontent.com/25686023/155740270-208e9079-a139-4810-b02c-2977c602919d.png"/>
            </MetaTags>
        </div>
    )
}

export default AppHeaders