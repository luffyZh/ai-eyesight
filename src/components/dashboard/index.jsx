import React, { useState } from 'react';
import { BarChart2, BarChart, Users, Clock, TrendingUp, Calendar, Filter, ChevronDown, MoreVertical } from 'lucide-react';
import { LineChart, Line, BarChart as RechartsBarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const EyeClinicDashboard = () => {
  const [yearFilter, ] = useState('2023');
  
  // 患者趋势数据
  const patientTrendData = [
    { month: 'Jan', total: 1245, new: 420, returning: 825 },
    { month: 'Feb', total: 1100, new: 380, returning: 720 },
    { month: 'Mar', total: 1350, new: 470, returning: 880 },
    { month: 'Apr', total: 1180, new: 400, returning: 780 },
    { month: 'May', total: 1680, new: 580, returning: 1100 },
    { month: 'Jun', total: 1950, new: 650, returning: 1300 },
    { month: 'Jul', total: 1830, new: 600, returning: 1230 },
    { month: 'Aug', total: 2100, new: 720, returning: 1380 },
    { month: 'Sep', total: 1920, new: 640, returning: 1280 },
    { month: 'Oct', total: 1750, new: 580, returning: 1170 },
    { month: 'Nov', total: 1840, new: 620, returning: 1220 },
    { month: 'Dec', total: 1720, new: 580, returning: 1140 },
  ];
  
  // AI效率数据
  const aiEfficiencyData = [
    { month: 'Jan', avgTime: 6.2, efficiencyGain: 28 },
    { month: 'Feb', avgTime: 5.9, efficiencyGain: 32 },
    { month: 'Mar', avgTime: 5.6, efficiencyGain: 35 },
    { month: 'Apr', avgTime: 5.4, efficiencyGain: 38 },
    { month: 'May', avgTime: 5.1, efficiencyGain: 42 },
    { month: 'Jun', avgTime: 4.9, efficiencyGain: 45 },
    { month: 'Jul', avgTime: 4.7, efficiencyGain: 48 },
    { month: 'Aug', avgTime: 4.5, efficiencyGain: 51 },
    { month: 'Sep', avgTime: 4.4, efficiencyGain: 53 },
    { month: 'Oct', avgTime: 4.2, efficiencyGain: 56 },
    { month: 'Nov', avgTime: 4.0, efficiencyGain: 58 },
    { month: 'Dec', avgTime: 3.8, efficiencyGain: 62 },
  ];
  
  // 疾病分布数据
  const diseasesData = [
    { name: '干眼症', value: 35, color: '#00C49F' },
    { name: '近视/远视', value: 25, color: '#0088FE' },
    { name: '结膜炎', value: 15, color: '#FFBB28' },
    { name: '白内障', value: 10, color: '#FF8042' },
    { name: '青光眼', value: 8, color: '#8884d8' },
    { name: '其他', value: 7, color: '#82ca9d' },
  ];
  
  // 区域分布数据
  const regionData = [
    { month: 'Jan', China: 55, America: 45 },
    { month: 'Feb', China: 40, America: 30 },
    { month: 'Mar', China: 45, America: 35 },
    { month: 'Apr', China: 25, America: 18 },
    { month: 'May', China: 60, America: 70 },
    { month: 'Jun', China: 75, America: 85 },
    { month: 'Jul', China: 65, America: 78 },
    { month: 'Aug', China: 120, America: 50 },
    { month: 'Sep', China: 90, America: 35 },
    { month: 'Oct', China: 50, America: 65 },
    { month: 'Nov', China: 55, America: 78 },
  ];
  
  // 发票数据
  const invoiceData = [
    { id: 'INV-2001', category: '常规检查', price: '$83.74', status: 'Paid', date: '2023-11-01' },
    { id: 'INV-2002', category: '特殊检查', price: '$97.14', status: 'Out of Date', date: '2023-10-28' },
    { id: 'INV-2003', category: '手术', price: '$168.71', status: 'Progress', date: '2023-11-05' },
  ];
  
  // 相关应用
  const relatedApps = [
    { 
      name: '眼科AI助手', 
      platform: 'iOS/Android', 
      price: 'free',
      rating: 4, 
      reviews: '3,914',
      icon: '👁️' 
    },
    { 
      name: '眼部扫描仪', 
      platform: 'iOS/Android', 
      price: 'free',
      rating: 4.5, 
      reviews: '1,536',
      icon: '🔍' 
    },
    { 
      name: '视力训练', 
      platform: 'Windows', 
      price: '$6.71',
      rating: 4.5, 
      reviews: '5,122',
      icon: '👓' 
    },
  ];

  return (
    <div className="bg-gray-50 p-6 overflow-y-auto h-auto">
      {/* Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg col-span-full">
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-xl font-medium text-green-800">欢迎回来 👋</h2>
              <p className="text-xl text-green-800 font-semibold">眼科主任</p>
              
              <p className="mt-3 text-green-700">
                欢迎使用眼科AI辅助问诊系统的数据看板。您可以在这里查看关键指标和统计数据。
              </p>
              <p className="mt-2 text-green-700">
                👉 <a href="#" className="text-green-600 underline">https://eyecare-ai.example.com</a>
              </p>
              
              <button className="mt-4 flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                <BarChart2 className="h-5 w-5 mr-2" />
                <span>查看详细报告</span>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="flex rounded-xl p-4 text-center gap-2">
                <div className="text-6xl font-bold mb-2 text-teal-600">
                  {new Date().getDate()}
                </div>
                <div className="flex flex-col items-center gap-0.5 text-xl font-bold">
                  <div className="text-gray-600">
                    {new Date().getFullYear()}
                  </div>
                  <div className="text-gray-600">
                    {(new Date().getMonth() + 1).toString().padStart(2, '0')}月
                  </div>
                </div>
              </div>
              {/* 这里显示星期几 */}
              <div className="flex justify-between items-center mb-3">
                {['一', '二', '三', '四', '五', '六', '日'].map((day, index) => (
                  <div 
                    key={index} 
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      (new Date().getDay() === 0 && index === 6) || (new Date().getDay() === index + 1) 
                        ? 'bg-teal-500 text-white text-2xl w-10 h-10' 
                        : 'text-gray-400'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 col-span-full gap-6">
          <div className="bg-teal-500 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">62%</p>
                <div className="flex items-center mt-1">
                  <div className="h-4 w-4 bg-white rounded-full flex items-center justify-center mr-2">
                    <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                  </div>
                  <p>效率提升</p>
                </div>
              </div>
              <div className="h-16 w-16 rounded-full bg-teal-400 bg-opacity-30 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-teal-500">
                    <TrendingUp size={20} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-bold">28,566</h3>
            <p className="text-white text-opacity-80">AI预诊次数</p>
          </div>
          
          <div className="bg-cyan-500 p-6 rounded-lg text-white">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">75%</p>
                <div className="flex items-center mt-1">
                  <div className="h-4 w-4 bg-white rounded-full flex items-center justify-center mr-2">
                    <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <p>满意度</p>
                </div>
              </div>
              <div className="h-16 w-16 rounded-full bg-cyan-400 bg-opacity-30 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-cyan-500">
                    <Users size={20} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-bold">45,566</h3>
            <p className="text-white text-opacity-80">就诊患者数量</p>
          </div>
        </div>
      </div>
      
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 font-medium">总就诊患者</h3>
            <div className="flex items-center text-green-500">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="ml-1">+2.6%</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">18,765</h2>
          <div className="h-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={patientTrendData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 font-medium">AI预诊平均时间</h3>
            <div className="flex items-center text-green-500">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="ml-1">+0.2%</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">3.8<span className="text-lg font-normal text-gray-500">分钟</span></h2>
          <div className="h-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={aiEfficiencyData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="avgTime" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 font-medium">复诊率</h3>
            <div className="flex items-center text-red-500">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
              </svg>
              <span className="ml-1">-0.1%</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">23.5%</h2>
          <div className="h-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={patientTrendData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="returning" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">患者就诊趋势</h3>
            <button className="text-gray-500 hover:text-gray-700">
              <Filter size={18} />
            </button>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={patientTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="total" stroke="#10b981" fillOpacity={1} fill="url(#colorTotal)" name="总就诊" />
                <Area type="monotone" dataKey="new" stroke="#3b82f6" fillOpacity={1} fill="url(#colorNew)" name="新患者" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">常见病种分布</h3>
            <div className="relative">
              <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm border rounded px-2 py-1">
                <span>{yearFilter}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={diseasesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {diseasesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-col justify-center">
              {diseasesData.map((disease, index) => (
                <div key={index} className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: disease.color }}></div>
                  <div className="flex-1 text-gray-700">{disease.name}</div>
                  <div className="font-medium">{disease.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">AI诊断效率</h3>
            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer">
              <MoreVertical size={16} />
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={aiEfficiencyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="avgTime" stroke="#0ea5e9" name="平均预诊时间 (分钟)" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="efficiencyGain" stroke="#10b981" name="效率提升 (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">区域就诊分布</h3>
            <div className="relative">
              <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm border rounded px-2 py-1">
                <span>{yearFilter}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={regionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorChina" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorAmerica" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="China" stroke="#10b981" fillOpacity={1} fill="url(#colorChina)" name="城区" />
                <Area type="monotone" dataKey="America" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorAmerica)" name="郊区" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Bottom Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">最新就诊记录</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">报告编号</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类别</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">费用</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoiceData.map((invoice, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{invoice.id}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{invoice.category}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{invoice.price}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                          invoice.status === 'Out of Date' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">相关辅助应用</h3>
          
          {relatedApps.map((app, index) => (
            <div key={index} className="flex items-center mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {app.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-base font-medium text-gray-800">{app.name}</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500">{app.platform}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className={`text-xs ${app.price === 'free' ? 'text-green-500' : 'text-red-500'}`}>{app.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(app.rating) ? 'fill-current' : 'text-gray-200'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      {app.rating % 1 !== 0 && (
                        <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{app.reviews} 评价</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EyeClinicDashboard;