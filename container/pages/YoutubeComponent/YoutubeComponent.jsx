import React, {Component, Fragment} from 'react';
import YoutubeComponent from '../../../component/YoutubeComponent/YoutubeComponent';

class YoutubeComponentPage extends Component {
    render(){
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComponent title="Youtube bagian 1" time="10.01" desc="Youtube video pertama"/>
                <YoutubeComponent title="Youtube bagian 2" time="20.02" desc="Youtube video keuda"/>
                <YoutubeComponent title="Youtube bagian 3" time="30.02" desc="Youtube video ketiga"/>
                <YoutubeComponent title="Youtube bagian 4" time="30.05" desc="Youtube video keempat"/>
                <YoutubeComponent />
            </Fragment>
        )
    }
}

export default YoutubeComponentPage;