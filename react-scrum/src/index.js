import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ConfigProvider>
);
