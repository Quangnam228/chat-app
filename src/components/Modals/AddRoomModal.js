import React, { useState, useContext } from 'react';
import { Modal, Form, Input } from 'antd';
import { AppContext } from '../../Context/AppProvider';
import { addDoc } from '../../fireBase/service';
import { AuthContext } from '../../Context/AuthProvider'

function AddRoomModal() {

    const {isAddRoomVisible, setIsAddRoomVisible} = useContext(AppContext);
    const {
        user: { uid },
    } = useContext(AuthContext);

    const [form] = Form.useForm();
    
    const handleOk = () => {

        addDoc('rooms',{
            ...form.getFieldsValue,
            members: [uid]
        })
        form.resetFields();
        setIsAddRoomVisible(false);
    }
    
    const handleCancel = () => {

        form.resetFields();
        setIsAddRoomVisible(false);
    }

    return (

        <div>
            <Modal
                title="Create Room"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout='vertical' >
                    <Form.Item label="Name Room" name="name">
                        <Input placeholder="enter name room"/>
                    </Form.Item>
                    <Form.Item label="Describe" name="name">
                        <Input.TextArea placeholder="enter name room"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModal
