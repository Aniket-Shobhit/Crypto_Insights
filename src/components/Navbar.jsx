import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {

    const menuItems = [{
        key: 1,
        label: (
            <Link to='/'>Home</Link>
        ),
        icon: <HomeOutlined />
    },{
        key: 2,
        label: (
            <Link to='/cryptocurrencies'>CryptoCurrencies</Link>
        ),
        icon: <FundOutlined />
    },{
        key: 3,
        label: (
            <Link to='/news'>News</Link>
        ),
        icon: <BulbOutlined />
    }];
    
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto Insights</Link>
                </Typography.Title>  
            </div>
            
            <Menu theme='dark' items={menuItems}>
            </Menu>
        </div>
    );
};

export default Navbar;