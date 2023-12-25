import React from 'react';
import { Tabs,Card,DatePicker, } from 'antd';
import { Column } from '@ant-design/plots';


const onChange = (key) =>{
    console.log(key);
};

const items = [
    {
        key:'1',
        label:'销售额',
    },
    {
        key: '2',
        label: '访问量',
    },
]
const DemoColumn = () => {
    const data = [
        {
            type: '1月',
            sales: 932,
        },
        {
            type: '2月',
            sales: 284,
        },
        {
            type: '3月',
            sales: 980,
        },
        {
            type: '4月',
            sales: 1084,
        },
        {
            type: '5月',
            sales: 253,
        },
        {
            type: '6月',
            sales: 560,
        },
        {
            type: '7月',
            sales: 1079,
        },
        {
            type: '8月',
            sales: 653,
        },
        {
            type: '9月',
            sales: 217,
        },
        {
            type: '10月',
            sales: 685,
        },
        {
            type: '11月',
            sales: 473,
        },
        {
            type: '12月',
            sales: 369,
        },
    ];


    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            // 'top', 'bottom', 'middle',
            //消除柱状图里的数据
            content:null,
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                //标签文本自动旋转（过长时使用）
                autoRotate: false,
            },
        },
        yAxis: {
            label: {
                autoHide: true,
                grid:null,
            },
            
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售量',
            },
        },
    };
    return <Column {...config} />;
};
const { RangePicker } = DatePicker;
const HandOver = () => (

    <Card style={{
        width:'auto',
        marginTop: '20px',
        marginLeft: '30px',
        marginRight:'30px',
    }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        <div style={{ position: 'absolute',top: '25px',right:'320px' }}>
            今日&nbsp;&nbsp;&nbsp;本周&nbsp;&nbsp;&nbsp;本月&nbsp;&nbsp;&nbsp;本年
        </div>

        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <RangePicker  />
        </div>

        <div style={{ height: 300, width: 700, position: 'relative', flex: 1 }}>
            <DemoColumn />
            <div style={{ position: 'absolute', top: '0px', right: '-460px', fontWeight: 'bold' }}>
                门店销售额排名
            </div>
            <div style={{
                position: 'absolute',
                top: '50px',  
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '15px',
            }}>
                1
            </div>
            <div style={{
                position: 'absolute',
                top: '48px',
                right: '-570px', 
                }}>
                工专路 0 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>
            <div style={{
                position: 'absolute',
                top: '90px',
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '15px',
            }}>
                2
            </div>

            <div style={{
                position: 'absolute',
                top: '88px',
                right: '-570px', 
            }}>
                工专路 1 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>
            <div style={{
                position: 'absolute',
                top: '130px',
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '15px',
            }}>
                3
            </div>
            <div style={{
                position: 'absolute',
                top: '128px',
                right: '-570px', 
            }}>
                工专路 2 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>

            <div style={{
                position: 'absolute',
                top: '170px',
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'lightgrey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontSize: '15px',
            }}>
                4
            </div>
            <div style={{
                position: 'absolute',
                top: '168px',
                right: '-570px', 
            }}>
                工专路 3 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>

            <div style={{
                position: 'absolute',
                top: '210px',
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'lightgrey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontSize: '15px',
            }}>
                5
            </div>
            <div style={{
                position: 'absolute',
                top: '208px',
                right: '-570px', 
            }}>
                工专路 4 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>

            <div style={{
                position: 'absolute',
                top: '250px',
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'lightgrey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontSize: '15px',
            }}>
                6
            </div>
            <div style={{
                position: 'absolute',
                top: '248px',
                right: '-570px',
            }}>
                工专路 5 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>

            <div style={{
                position: 'absolute',
                top: '290px',
                right: '-380px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'lightgrey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontSize: '15px',
            }}>
                7
            </div>
            <div style={{
                position: 'absolute',
                top: '288px',
                right: '-570px',
            }}>
                工专路 6 号店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;323,234
            </div>            

        </div>  
     
    </Card>      
)
export default HandOver;
