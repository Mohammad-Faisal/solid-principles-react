import {useEffect, useState} from "react";
import {useHttpGetRequest} from "./useHttpGet";

const REMOTE_URL = 'https://jsonplaceholder.typicode.com/users'

export const useGetRemoteData = () => {

    const {users , isLoading} = useHttpGetRequest(REMOTE_URL)
    const [filteredUsers , setFilteredUsers] = useState([])

    useEffect(() => {
        const filteredUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                contact: `${user.phone} , ${user.email}`
            };
        });
        setFilteredUsers(filteredUsers)
    },[users])

    return {filteredUsers , isLoading}
}