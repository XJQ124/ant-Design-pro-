import React from "react";
import { Card, Divider, Dropdown, } from 'antd';
import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import DemoArea from "./DemoCard/Area";
import DemoColumn from "./DemoCard/Column";
import DemoProgress from "./DemoCard/Progress";

const items = [
    {
        label: (
          <div>
            指示说明
          </div>
        ),
    }];

const CardBox=()=>(
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card
            style={{
                width: 250,
                marginTop: '20px',
                marginLeft: '30px',
            }}
        >
            <div style={{ color: 'gray', fontSize: 13, fontWeight: 'bold' }}>
                总销售额
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '130px' }} />
                </Dropdown>
            </div>
            <div style={{ fontSize: 25, }}>¥126,560 </div>

            <p>周同比 12% <CaretUpOutlined style={{ color: 'red' }} />&nbsp;&nbsp;&nbsp;日同比 11% <CaretDownOutlined style={{ color: 'lime' }} /> </p>
            <Divider />
            <>日销售额&nbsp; &nbsp;¥12,423 </>
        </Card>

        <Card
            style={{
                width: 250,
                marginTop: '20px',
                marginLeft: '30px',
            }}
        >
            <div style={{ color: 'gray', fontSize: 13, fontWeight: 'bold' }}>
                访问量
                <Dropdown
                 style={{backgroundColor: 'black',
                        color:"white"}}
                    menu={{
                        items,
                    }}
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '130px' }} />
                </Dropdown>
            </div>  
            <div style={{ fontSize: 25, }}>8,846 </div>

            <DemoArea />

            <Divider />
            <div>日访问量&nbsp;&nbsp;1,234</div>
        </Card>

        <Card
            style={{
                width: 250,
                marginTop: '20px',
                marginLeft: '30px',
            }}
        >
            <div style={{ color: 'gray', fontSize: 13, fontWeight: 'bold' }}>
                支付笔数
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ marginLeft: '130px' }} />
                </Dropdown>
            </div>
            <div style={{ fontSize: 25, }}>6,560 </div>

            <DemoColumn />
            <Divider />
            <div>转换率&nbsp;&nbsp;60%</div>
        </Card>

        <Card
            style={{
                width: 250,
                marginTop: '20px',
                marginLeft: '30px',
            }}
        >
            <div style={{ color: 'gray', fontSize: 13, fontWeight: 'bold' }}>
                运营活动效果
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="top"
                    arrow
                >
                    <InfoCircleOutlined style={{ position: 'absolute', top: '28px', right: '35px' }} />
                </Dropdown>
            </div>
            <div style={{ fontSize: 25, }}>78% </div>
            <DemoProgress />
            <Divider />
            <p>周同比 12% <CaretUpOutlined style={{ color: 'red' }} /> &nbsp;&nbsp;&nbsp;日同比 11% <CaretDownOutlined style={{ color: 'lime' }} /> </p>
        </Card>
    </div>
);
export default CardBox;