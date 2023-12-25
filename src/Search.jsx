import { useState } from 'react';
import React from 'react';
import { Card,Divider,Dropdown,Menu,Table} from 'antd';
import { Area } from '@ant-design/plots';
import { EllipsisOutlined, InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const items =[
    {
        key:'1',
        label: (
            <>
            操作一
            </>
        ),
    },
    {
        key: '2',
        label: (
            <>
                操作二
            </>
        ),
    }
]


const DemoArea1 = () => {
    const [data] = useState([
        { x: '2023-12-19', y: 1 },
        { x: '2023-12-20', y: 6 },
        { x: '2023-12-21', y: 4 },
        { x: '2023-12-22', y: 8 },
        { x: '2023-12-23', y: 3 },
        { x: '2023-12-24', y: 7 },
        { x: '2023-12-25', y: 2 },
    ]);

    const config = {
        data,
        xField: 'x',
        yField: 'y',
        xAxis: {
            label: null,
            range: [0, 1],
        },
        yAxis: {
            label: null,
            //坐标网格线
            grid: null,
        },
        line: {
            style: {
                stroke: 'purple',
            },
        },
        smooth: true, // 设置为 true，表示使用平滑曲线
    };
    return (
        <div style={{ width: 200, height: 50 }}>
            <Area {...config} />
        </div>
    );
};

const DemoArea2 = () => {
    const [data,] = useState([
        { x: '2023-12-19', y: 1 },
        { x: '2023-12-20', y: 6 },
        { x: '2023-12-21', y: 4 },
        { x: '2023-12-22', y: 8 },
        { x: '2023-12-23', y: 3 },
        { x: '2023-12-24', y: 7 },
        { x: '2023-12-25', y: 2 },
    ]);

    const config = {
        data,
        xField: 'x',
        yField: 'y',
        xAxis: {
            label: null,
            range: [0, 1],
        },
        yAxis: {
            label: null,
            //坐标网格线
            grid: null,
        },
        line: {
            style: {
                stroke: 'purple',
            },
        },
        smooth: true, 
    };
    
    return (
        <div style={{ width: 200, height: 50 }}>
            <Area {...config} />
        </div>
    );
};

const columns = [
    {
        title: '排名',
        dataIndex: 'ranking',
    },
    {
        title: '搜索关键词',
        dataIndex: 'search',
        render: (text) => (
            <a href={`https://www.baidu.com`} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        ),
    },
    {
        title: '用户数',
        dataIndex: 'users',
        sorter: {
            compare: (a, b) => a.users - b.users,
            multiple: 2, //排序优先级
        },
    },
    {

        title: '周涨幅',
        dataIndex: 'price',
        sorter: {
            compare:(a,b) => a.price - b.price,
            multiple: 1,
        },
        render: (text) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>{text}</div>
                {text >= 0 ? (
                    <CaretUpOutlined style={{ color: 'red', marginLeft: '5px' }} />
                ) : (
                    <CaretDownOutlined style={{ color: 'green', marginLeft: '5px' }} />
                )}
            </div>
        ),
    },
];

const RandomData = () => {

    const data = [];
    for (let i = 1; i <= 50; i++) {
        //用户随机：首先生成一个[0,1)之间的浮点数，放大100倍，Math.floor向下取整，然后加1就是[0,1000]之间
        const randomUsers = Math.floor(Math.random() * 1000) + 1;
        //涨跌幅随机：随机生成一个[0,100)之间的浮点数 toFixed(2)是转变为字符串，仅保留2位小数，
        const randomPrice = (Math.random() * 100).toFixed(2) * (Math.random() > 0.5 ? 1 : -1);
        data.push({
            key: `${i}`,
            ranking: `${i}`,
            search: `搜索关键词-${i}`,
            users: randomUsers,
            price: randomPrice,
        });
    }
    return data;
};
const data = RandomData();


const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const SearchCard=()=>{

    return (
    <div>
        <Card style={{
            height:670,
            width:650,
            marginTop: '20px',
            marginLeft: '30px',
            marginRight: '30px',
        }}>
            <div style={{fontWeight:'bold',fontSize:'16px'}}>
                线上热门搜索
                <Divider/>

                <Dropdown menu={{
                    items,
                }}>
                <EllipsisOutlined style={{ position: 'absolute', top: '30px', right: '50px' }} />
                </Dropdown>
                
            </div>
            <div style={{
                marginTop: '20px',
                marginLeft: '8px',
                }}>
                搜索用户数
                <Dropdown
                    style={{
                        backgroundColor: 'black',
                        color: "white"
                    }}
                    overlay={
                        <Menu  >
                            <Menu.Item key="instructions">指标说明</Menu.Item>
                        </Menu>
                    }
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '5px' }} />
                </Dropdown>
            </div>

            <div style={{
                marginTop: '-20px',
                marginLeft: '310px',
            }}>
                人均搜索次数
                <Dropdown
                    style={{
                        backgroundColor: 'black',
                        color: "white"
                    }}
                    overlay={
                        <Menu  >
                            <Menu.Item key="instructions">指标说明</Menu.Item>
                        </Menu>
                    }
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '5px' }} />
                </Dropdown>
            </div>
            <DemoArea1 />
                <div style={{
                    marginTop: '-50px',
                    marginLeft: '310px',
                }}>
                    <DemoArea2 />
            </div>
                <Table columns={columns} dataSource={data} onChange={onChange} pagination={{ pageSize: 5 }} />                    
        </Card>
    </div>
    )
}


export default SearchCard