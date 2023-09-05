import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';

const {Text,Title} = Typography;
const { Option } = Select;

const News = (simplified) => {
    const count = simplified ? 10:100
    const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCategory: 'Cryptocurrency', count});
    
    console.log(cryptoNews);

    return (
        <div>
            News
        </div>
    );   
}

export default News;