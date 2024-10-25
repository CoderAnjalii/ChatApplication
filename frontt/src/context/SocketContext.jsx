import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext=()=>{
    return useContext(SocketContext);
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider=({children})=>{
    const [socket , setSocket]= useState(null);
    const [onlineUser,setOnlineUser]=useState([]);
    const {authUser} = useAuth();
    useEffect(()=>{
        if(authUser){
            const socket = io("https://slrtech-chatapp.onrender.com/",{
                query:{
                    userId:authUser?._id,
                }
            })
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUser(users)
            });
            setSocket(socket);
            return()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null); 
            }
        }
    },[authUser, socket]);
    return(
    <SocketContext.Provider value={{socket , onlineUser}}>
        {children}
    </SocketContext.Provider>
    )
}