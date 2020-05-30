import React from 'react';
import '../../assets/styles/Home.css';
import Jumbotron from '../organisms/Jumbotron';

class Home extends React.Component {
    render() {
        return (
            <>
                <Jumbotron />
                <div className="container pt-5">
                </div>
            </>
        )
    }
}

export default Home;