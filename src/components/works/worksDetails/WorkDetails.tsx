import React from 'react';
import {useParams} from "react-router-dom";

const WorkDetails = () => {
    let {id} = useParams<{ readonly id: string }>();
    return <div>Now showing post {id}</div>;
};

export default WorkDetails;