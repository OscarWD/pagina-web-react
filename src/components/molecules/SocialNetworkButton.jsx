import React from 'react'

function SocialNetworkButton({ image, socialNetwork }) {

    return (
        <>
            <img src={image} alt={socialNetwork} height="30" width="30" className="img-fluid rounded-circle shadow" />
            <p>{socialNetwork}</p>
        </>
    )

}

export default SocialNetworkButton