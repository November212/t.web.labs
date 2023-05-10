import { Menu } from 'antd';

const { SubMenu } = Menu;

function MenuBlock() {
    return (
        <Menu mode="inline">
            <SubMenu key="sub1" title="Menu Item 1">
                <Menu.Item key="1">Submenu Item 1</Menu.Item>
                <Menu.Item key="2">Submenu Item 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Menu Item 2">
                <Menu.Item key="3">Submenu Item 3</Menu.Item>
                <Menu.Item key="4">Submenu Item 4</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default MenuBlock;
