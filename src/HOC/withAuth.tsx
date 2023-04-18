import { AuthContext } from "../providers/AuthProviders";
import { ComponentType, useContext } from "react";

export const withAuth = (Comment: ComponentType) => (props:any) => {
    const {user} = useContext(AuthContext)

    if(!user) return <p>U are not auth</p>

    return <Comment {...props}></Comment>
};