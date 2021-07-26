import React from 'react';
import {User} from "./User";

export const AdminUser = ({user}) => {

    return <>
        <User user={user} />
        <div> This is Admin user details</div>
    </>
}