import React,{ useContext, useMemo} from 'react'
import styled from 'styled-components';
import { Button, Avatar, Tooltip, Form, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';
import {AppContext} from '../../Context/AppProvider';

const WrapperStyled = styled.div`
    height: 100vh;
`;

const HeaderStyled = styled.div`
    display: fex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header {
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__title {
            margin: 0;
            font-weight: bold;
        }
        &__description {
            font-size: 12px;
        }
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;
const ContentStyled = styled.div`

    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;

`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

const MessageListStyle = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;
function ChatWindow() {

    // const { selectedRoom, members } = useContext(AppContext);
    

    return (
        <WrapperStyled>
            <HeaderStyled>
                <div className="header__info">
                    {/* <p className="header__title">{selectedRoom.name}</p>
                    <span className="header__description">{selectedRoom.description}</span> */}
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} type="text"></Button>
                    <Avatar.Group size='small' maxCount={2}>
                        {/* {
                            members.map((member) => {
                                <Tooltip title={member.displayName} key={member.id}>
                                    <Avatar src={member.photoURL}>{member.photoURL ? '': member.displayName?.charAt(0)?.toUpperCase()}</Avatar>
                                </Tooltip>
                            })
                        } */}
                        <Tooltip title="A">
                            <Avatar>Nam</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyle>
                    <Message text="test" photoURL={null} displayName="Tung" createdAt={1231254671534}/>
                    <Message text="test" photoURL={null} displayName="Tung" createdAt={1231254671534}/>
                    <Message text="test" photoURL={null} displayName="Tung" createdAt={1231254671534}/>
                </MessageListStyle>

                <FormStyled>
                    <Form.Item>
                        <Input placeholder="enter a message" bordered={false} autoComplete="off"/>
                    </Form.Item>
                    <Button type="primary">Send</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    )
}

export default ChatWindow
