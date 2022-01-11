import React,{ useContext, useMemo } from 'react'
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined  } from '@ant-design/icons';
import useFirestore from '../../hook/useFirestore';
import { AppContext } from '../../Context/AppProvider';

const { Panel } = Collapse;
const PanelStyle = styled(Panel)`
    &&&{
        .ant-collapse-header,p{
            color: white;
        }
        .ant-collapse-content-box{
            padding: 0 40px;
        }
        .add-room{
            color: white;
            padding: 0;
        }
    }
`;
const LinkStyle = styled(Typography.Text)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;
export default function RoomList() {

    const { rooms, setIsAddRoomVisible, setSelectedRoomId} = useContext(AppContext);

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    }
    
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyle header="Room list" key='1'>
                {
                    rooms.map(room => 
                    <LinkStyle 
                        key={room.id}
                        onClick={() => {
                            setSelectedRoomId(room.id)
                        }}
                    >
                        {room.name}
                    </LinkStyle>)
                }
                <Button 
                    type="text" 
                    icon={<PlusSquareOutlined />} 
                    className="add-room"
                    onClick={handleAddRoom}
                >
                    Add Room
                </Button>                
            </PanelStyle>
        </Collapse>
    )
}
