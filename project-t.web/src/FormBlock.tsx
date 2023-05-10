import { Form, Input, Button } from 'antd';

function FormBlock() {
    const onFinish = (values: { [name: string]: any }) => {
        console.log(values);
        alert('Form submitted!');
    };


    return (
        <Form onFinish={onFinish}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                <Input type="email" />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormBlock;
