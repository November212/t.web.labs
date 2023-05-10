import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

function MenuBlock() {
    return (
        <Menu mode="inline">
            <SubMenu key="sub1" title="Menu Item 1">
                <Menu.Item key="1">
                    <Link to="/">Login Form</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/card">Card</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Menu Item 2">
                <Menu.Item key="3">
                    <Link to="/form">Form Block</Link>
                </Menu.Item>
                <Menu.Item key="4">Submenu Item 4</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default MenuBlock;