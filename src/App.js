  import React from "react";
  import CardBox from "./CardBox";
  import HandOver from "./Tabs";
  import SearchCard from "./Search";
  import Sales from "./Sales";
  import zhCN from 'antd/locale/zh_CN';
  import { ConfigProvider } from 'antd';
  import Transformation from "./Transformation";
  
  const App = () => {
    return(
      <div>
        {/* ConfigProvider是来进行全局设置的 */}
        <ConfigProvider locale={zhCN}>

          <CardBox />
          <HandOver />
          <SearchCard />
          <Sales/>
          <Transformation/>

        </ConfigProvider>  
        
      </div>
    )
}    
  export default App;