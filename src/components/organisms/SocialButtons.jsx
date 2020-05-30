import React from 'react';
import LogoFacebook from '../../assets/icons/logoFacebook.svg'
import SocialNetworkButton from '../molecules/SocialNetworkButton';

function SocialButtons() {
    return (
        <div className="row mt-5 justify-content-around">
            <div className="col-md-1 text-center">
                <SocialNetworkButton
                    image={LogoFacebook}
                    socialNetwork="Facebook"
                />
            </div>
            <div className="col-md-1 text-center">
                <SocialNetworkButton
                    image={LogoFacebook}
                    socialNetwork="Github"
                />
            </div>
            <div className="col-md-1 text-center">
                <SocialNetworkButton
                    image={LogoFacebook}
                    socialNetwork="Youtube"
                />
            </div>
            <div className="col-md-1 text-center">
                <SocialNetworkButton
                    image={LogoFacebook}
                    socialNetwork="Gmail"
                />
            </div>
        </div>
    )
}

export default SocialButtons;