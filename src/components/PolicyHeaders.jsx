import React from 'react'
import MetaTags from 'react-meta-tags';

class PolicyHeaders extends React.Component {
    render() {
      return (
          <div className="wrapper">
            <MetaTags>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width' />
                <title>Terms &amp; Conditions</title>
            </MetaTags>
          </div>
        )
    }
  }

export default PolicyHeaders