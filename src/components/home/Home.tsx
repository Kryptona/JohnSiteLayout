import React, {Component} from "react";

import Panel from "../shared/headerPanel/Panel";
import Introduce from "./introduce/Introduce";
import Posts from "./recent_posts/Posts";
import Footer from "../shared/footer/Footer";
import FeaturedWorks from "./featured_works/FeaturedWorks";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Panel/>
                <Introduce/>
                <Posts/>
                <FeaturedWorks/>
                <Footer/>
            </div>
        );
    }
}


