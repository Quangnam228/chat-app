import React, { useState,useMemo } from 'react';
import useFirestore from '../hook/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();
export default function AppProvider({ children }) {

    const [isAddRoomVisible, setIsAddRoomVisible ] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');

    const {
        user: { uid },
    } = React.useContext(AuthContext);
    
    const roomsCondition = React.useMemo(() => {
        return {
        fieldName: 'members',
        operator: 'array-contains',
        compareValue: uid,
        };
    }, [uid]);
    
    const rooms = useFirestore('rooms', roomsCondition);
    
    const selectedRoom = useMemo(() =>{
        rooms.find(room => room.id === selectedRoomId)
    },[ rooms, selectedRoomId ]);

    // const membersCondition = React.useMemo(() => {
    //     return {
    //     fieldName: 'uid',
    //     operator: 'in',
    //     compareValue: selectedRoom.members
    //     };
    // }, [selectedRoom.members]);
    
    // const members = useFirestore('rooms', membersCondition);
    
    
    // const members = useFirestore('rooms', membersCondition);

    return (
        <AppContext.Provider
            value={{
                rooms,
                // members,
                selectedRoom,
                isAddRoomVisible,
                setIsAddRoomVisible,
                selectedRoomId, 
                setSelectedRoomId
            }}
            >
            {children}
        </AppContext.Provider>
    );
}