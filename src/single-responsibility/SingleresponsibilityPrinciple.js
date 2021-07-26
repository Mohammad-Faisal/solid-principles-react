import React from "react";
import {useGetRemoteData} from "./useGetRemoteData";

export const Users = () => {
    const {filteredUsers , isLoading} = useGetRemoteData()

    return <>
        <div> Users List</div>
        <div> Loading state: {isLoading? 'Loading': 'Success'}</div>
        {filteredUsers.map(user => <div>{user.name}</div>)}
    </>
}

const UserDetails = (user) => {

    const showDetails = (user) => {
        alert(user.contact)
    }

    return <div key={user.id} onClick={() => showDetails(user)}>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
}