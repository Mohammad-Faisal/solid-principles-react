import React from 'react';

export const User = ({user}) => {

    return <>
        <div> Name: {user.name}</div>
        <div> Email: {user.email}</div>
        {
            user.type === 'SUPER_ADMIN' &&
            <div> Details about super admin</div>
        }

        {
            user.type === 'ADMIN' &&
            <div> Details about admin</div>
        }

        {
            user.type === 'EMPLOYEE' &&
            <div> Details about employee</div>
        }
    </>
}