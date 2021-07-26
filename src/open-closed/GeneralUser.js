import React from 'react';
import {User} from "./User";

export const GeneralUser = () => {

    return <div>
        <User user={{ name:"faisal" , email:"test@email.com"}} />
        <div> This is user is not editable</div>
    </div>
}