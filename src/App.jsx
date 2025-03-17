import React, { useState } from 'react';
import { BotMessageSquare, Calendar, Bell, ChevronRight, BarChart2, Users, ChevronLeft } from 'lucide-react';
import { Radio } from 'antd';

import DoctorLogo from './assets/doctor.png';
import Logo from './assets/logo.png';
import StepProgress from './components/steps';

const steps = [{
  value: 1,
  label: '基本信息'
}, {
  value: 2,
  label: '医护问诊',
}, {
  value: 3,
  label: '眼科检查',
}, {
  value: 4,
  label: 'AI 报告',
}];

const App = () => {
  // State for sidebar selected tab
  const [selectedTab, setSelectedTab] = useState('patients');
  
  // State for the current step in the workflow
  const [currentStep, setCurrentStep] = useState(1);
  
  // Basic info state
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    gender: 'male',
    phone: '',
    birthday: '',
    visitType: 'first',
    age: 'young'
  });
  
  // Medical inquiry state
  const [medicalInquiry, setMedicalInquiry] = useState({
    onsetDate: '',
    medication: 'no',
    medicationName: '',
    hasExamReport: 'no',
    affectedEye: 'both',
    leftEyeSymptoms: {
      painLocation: [],
      painDegree: '轻度',
      painNature: '刺痛',
      isRed: false,
      isDry: false,
      isSwollen: false,
      visionStatus: 'normal',
      originalVision: '',
      currentVision: ''
    },
    rightEyeSymptoms: {
      painLocation: [],
      painDegree: '轻度',
      painNature: '刺痛',
      isRed: false,
      isDry: false,
      isSwollen: false,
      visionStatus: 'normal',
      originalVision: '',
      currentVision: ''
    },
    examData: {
      rightEyePressure: '',
      leftEyePressure: '',
      rightEyeNakedVision: '',
      leftEyeNakedVision: '',
      rightEyeCorrectedVision: '',
      leftEyeCorrectedVision: '',
      slitLampResult: ''
    },
    medicalHistory: [],
    familyHistory: [],
    allergyHistory: [],
    epidemicContact: false,
    surgeryDescription: ''
  });
  
  // Chief complaint supplement state
  const [chiefComplaint, setChiefComplaint] = useState({
    affectedEye: 'both',
    leftEyeSymptoms: {
      symptoms: [],
      tearing: '',
      secretion: false,
      burning: false,
      photophobia: false,
      tearReduction: false,
      lumpsAndMasses: false,
      diplopia: false,
      nightBlindness: false,
      blurredVision: false,
      iridescence: false,
      imagingDisorders: []
    },
    rightEyeSymptoms: {
      symptoms: [],
      tearing: '',
      secretion: false,
      burning: false,
      photophobia: false,
      tearReduction: false,
      lumpsAndMasses: false,
      diplopia: false,
      nightBlindness: false,
      blurredVision: false,
      iridescence: false,
      imagingDisorders: []
    }
  });
  
  // Function to handle next step
  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Function to handle previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Function to handle affected eye change in medical inquiry
  const handleAffectedEyeChange = (value) => {
    setMedicalInquiry({...medicalInquiry, affectedEye: value});
  };
  
  // Function to handle affected eye change in chief complaint
  const handleComplaintEyeChange = (value) => {
    setChiefComplaint({...chiefComplaint, affectedEye: value});
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="mt-4 p-4 flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" className="h-24 w-24 rounded-full" />
          <span className="mt-2 text-gray-700 text-2xl">星空深智</span>
          <span className="text-gray-500 text-lg mt-1">眼科 AI 诊疗系统</span>
        </div>

        <nav className="mt-4">
          <div 
            className={`px-4 py-3 flex items-center cursor-pointer ${selectedTab === 'dashboard' ? 'bg-gray-100 text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}
            onClick={() => setSelectedTab('dashboard')}
          >
            <BarChart2 className="h-5 w-5 mr-3" />
            <span>数据看板</span>
          </div>

          <div 
            className={`px-4 py-3 flex items-center cursor-pointer ${selectedTab === 'patients' ? 'bg-gray-100 text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}
            onClick={() => setSelectedTab('patients')}
          >
            <Users className="h-5 w-5 mr-3" />
            <span>患者档案</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm flex items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input 
                type="text" 
                placeholder="搜索患者..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="absolute left-3 top-2.5">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-700">
              <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>门诊时间: 9:00 - 17:30</span>
            </div>
            
            <a href="mailto:contact@eyecare.com" className="text-gray-700 hover:text-teal-600 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@eyecare.com</span>
            </a>
            
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600 hover:text-teal-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            
            <div className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-teal-500">
                <img src={DoctorLogo} alt="User avatar" className="h-full w-full object-cover" />
              </div>
              <span className="ml-2 text-gray-700">医生-张</span>
            </div>
          </div>
        </header>

        {/* Main Form Content */}
        <main className="p-6 flex flex-col h-[calc(100vh-72px)] overflow-auto">
          {/* Steps Section */}
          <StepProgress steps={steps} currentStep={currentStep} />
          
          {/* Dynamic content based on current step */}
          {currentStep === 1 && (
            <section>
              <h2 className="text-xl font-medium text-gray-800 mb-6 border-l-4 border-teal-600 pl-2">基本信息</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">姓名</label>
                    <input 
                      type="text" 
                      value={basicInfo.name}
                      onChange={(e) => setBasicInfo({...basicInfo, name: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">性别</label>
                    <Radio.Group
                      value={basicInfo.gender}
                      onChange={(e) => setBasicInfo({...basicInfo, gender: e.target.value})}
                      className="flex items-center h-[42px]"
                      optionType="button"
buttonStyle="solid"
                    >
                      <Radio value="male">男</Radio>
                      <Radio value="female">女</Radio>
                    </Radio.Group>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">手机号</label>
                    <input 
                      type="text" 
                      value={basicInfo.phone}
                      onChange={(e) => setBasicInfo({...basicInfo, phone: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">生日</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={basicInfo.birthday}
                        onChange={(e) => setBasicInfo({...basicInfo, birthday: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">年龄</label>
                    <Radio.Group
                      value={basicInfo.age}
                      onChange={(e) => setBasicInfo({...basicInfo, age: e.target.value})}
                      className="flex items-center h-[42px]"
                      optionType="button"
buttonStyle="solid"
                    >
                      <Radio value="young">18岁以下</Radio>
                      <Radio value="adult">18-60岁</Radio>
                      <Radio value="elder">60岁以上</Radio>
                    </Radio.Group>
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-gray-700 mb-2">就诊类型</label>
                    <Radio.Group
                      value={basicInfo.visitType}
                      onChange={(e) => setBasicInfo({...basicInfo, visitType: e.target.value})}
                      className="flex items-center h-[42px]"
                      optionType="button"
buttonStyle="solid"
                    >
                      <Radio value="first">初诊</Radio>
                      <Radio value="follow">复诊</Radio>
                      <Radio value="consultation">会诊</Radio>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <button 
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    下一步
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </button>
              </div>
            </section>
          )}
          
          {currentStep === 2 && (
            <section>
              <h2 className="text-xl font-medium text-gray-800 mb-6 border-l-4 border-teal-500 pl-2">医护问诊</h2>
              <div className="flex-1 overflow-auto">
                {/* 病情信息 */}
                <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-teal-600 mb-4">病情信息</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">发病时间</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          value={medicalInquiry.onsetDate}
                          onChange={(e) => setMedicalInquiry({...medicalInquiry, onsetDate: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">是否用药</label>
                      <Radio.Group
                        value={medicalInquiry.medication}
                        onChange={(e) => setMedicalInquiry({...medicalInquiry, medication: e.target.value})}
                        className="flex items-center h-[42px]"
                        optionType="button"
                        buttonStyle="solid"
                      >
                        <Radio value="yes">是</Radio>
                        <Radio value="no">否</Radio>
                      </Radio.Group>
                    </div>
                    
                    {medicalInquiry.medication === 'yes' && (
                      <div>
                        <label className="block text-gray-700 mb-2">药品名称</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.medicationName}
                          onChange={(e) => setMedicalInquiry({...medicalInquiry, medicationName: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-gray-700 mb-2">是否有检查单</label>
                      <Radio.Group
                        value={medicalInquiry.hasExamReport}
                        onChange={(e) => setMedicalInquiry({...medicalInquiry, hasExamReport: e.target.value})}
                        className="flex items-center h-[42px]"
                        optionType="button"
buttonStyle="solid"
                      >
                        <Radio value="yes">是</Radio>
                        <Radio value="no">否</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
                
                {/* 症状描述 */}
                <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-teal-600 mb-4">症状描述</h3>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">请选择受影响的眼部</label>
                    <Radio.Group
                      value={medicalInquiry.affectedEye}
                      onChange={(e) => handleAffectedEyeChange(e.target.value)}
                      className="flex items-center h-[42px]"
                      optionType="button"
buttonStyle="solid"
                    >
                      <Radio value="both">双眼</Radio>
                      <Radio value="left">左眼</Radio>
                      <Radio value="right">右眼</Radio>
                    </Radio.Group>
                  </div>
                  
                  <div className={`grid ${medicalInquiry.affectedEye === 'both' ? 'grid-cols-2 gap-6' : 'grid-cols-1'}`}>
                    {/* Left Eye Card - Only show if left or both eyes are affected */}
                    {(medicalInquiry.affectedEye === 'left' || medicalInquiry.affectedEye === 'both') && (
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="text-md font-medium text-gray-700 mb-3">左眼</h4>
                        
                        <div className="mb-3">
                          <label className="block text-gray-700 mb-2">疼痛位置</label>
                          <div className="grid grid-cols-2 gap-2">
                            {['眼睑', '结膜', '角膜', '眼眶', '眼内', '眼部', '头部'].map((location) => (
                              <label key={location} className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  checked={medicalInquiry.leftEyeSymptoms.painLocation.includes(location)}
                                  onChange={(e) => {
                                    const updatedLocations = e.target.checked 
                                      ? [...medicalInquiry.leftEyeSymptoms.painLocation, location]
                                      : medicalInquiry.leftEyeSymptoms.painLocation.filter(loc => loc !== location);
                                    
                                    setMedicalInquiry({
                                      ...medicalInquiry, 
                                      leftEyeSymptoms: {
                                        ...medicalInquiry.leftEyeSymptoms,
                                        painLocation: updatedLocations
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2 text-sm">{location}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="block text-gray-700 mb-2">疼痛程度</label>
                          <div className="flex space-x-4">
                            <Radio.Group
                              value={medicalInquiry.leftEyeSymptoms.painDegree}
                              onChange={(e) => setMedicalInquiry({...medicalInquiry, leftEyeSymptoms: {...medicalInquiry.leftEyeSymptoms, painDegree: e.target.value}})}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              {['轻度', '中度', '重度'].map((degree) => (
                                <Radio value={degree} key={degree}>{degree}</Radio>
                              ))}
                            </Radio.Group>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="block text-gray-700 mb-2">疼痛性质</label>
                          <Radio.Group
                            value={medicalInquiry.leftEyeSymptoms.painNature}
                            onChange={(e) => setMedicalInquiry({...medicalInquiry, leftEyeSymptoms: {...medicalInquiry.leftEyeSymptoms, painNature: e.target.value}})}
                            className="flex items-center h-[42px]"
                            optionType="button"
                            buttonStyle="solid"
                          >
                            {['刺痛', '触痛', '胀痛', '灼痛', '疼痛'].map((nature) => (
                              <Radio value={nature} key={nature}>{nature}</Radio>
                            ))}
                          </Radio.Group>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <label className="block text-gray-700 mb-2">是否眼红</label>
                            <Radio.Group
                              value={medicalInquiry.leftEyeSymptoms.isRed ? 'yes' : 'no'}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  leftEyeSymptoms: {
                                    ...medicalInquiry.leftEyeSymptoms,
                                    isRed: e.target.value === 'yes'
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
buttonStyle="solid"
                            >
                              <Radio value="yes">是</Radio>
                              <Radio value="no">否</Radio>
                            </Radio.Group>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">是否眼干</label>
                            <Radio.Group
                              value={medicalInquiry.leftEyeSymptoms.isDry ? 'yes' : 'no'}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  leftEyeSymptoms: {
                                    ...medicalInquiry.leftEyeSymptoms,
                                    isDry: e.target.value === 'yes'
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="yes">是</Radio>
                              <Radio value="no">否</Radio>
                            </Radio.Group>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">是否眼胀</label>
                            <Radio.Group
                              value={medicalInquiry.leftEyeSymptoms.isSwollen ? 'yes' : 'no'}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  leftEyeSymptoms: {
                                    ...medicalInquiry.leftEyeSymptoms,
                                    isSwollen: e.target.value === 'yes'
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="yes">是</Radio>
                              <Radio value="no">否</Radio>
                            </Radio.Group> 
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">视力情况</label>
                            <Radio.Group
                              value={medicalInquiry.leftEyeSymptoms.visionStatus}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  leftEyeSymptoms: {
                                    ...medicalInquiry.leftEyeSymptoms,
                                    visionStatus: e.target.value
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="normal">视力正常</Radio>
                              <Radio value="declined">视力下降</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        
                        {medicalInquiry.leftEyeSymptoms.visionStatus === 'declined' && (
                          <div className="grid grid-cols-2 gap-4 mb-3 bg-gray-50 p-3 rounded-md">
                            <div>
                              <label className="block text-gray-700 mb-2 text-sm">左眼原视力</label>
                              <input 
                                type="text" 
                                value={medicalInquiry.leftEyeSymptoms.originalVision}
                                onChange={(e) => {
                                  setMedicalInquiry({
                                    ...medicalInquiry, 
                                    leftEyeSymptoms: {
                                      ...medicalInquiry.leftEyeSymptoms,
                                      originalVision: e.target.value
                                    }
                                  });
                                }}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2 text-sm">左眼现视力</label>
                              <input 
                                type="text" 
                                value={medicalInquiry.leftEyeSymptoms.currentVision}
                                onChange={(e) => {
                                  setMedicalInquiry({
                                    ...medicalInquiry, 
                                    leftEyeSymptoms: {
                                      ...medicalInquiry.leftEyeSymptoms,
                                      currentVision: e.target.value
                                    }
                                  });
                                }}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Right Eye Card - Only show if right or both eyes are affected */}
                    {(medicalInquiry.affectedEye === 'right' || medicalInquiry.affectedEye === 'both') && (
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="text-md font-medium text-gray-700 mb-3">右眼</h4>
                        
                        <div className="mb-3">
                          <label className="block text-gray-700 mb-2">疼痛位置</label>
                          <div className="grid grid-cols-2 gap-2">
                            {['眼睑', '结膜', '角膜', '眼眶', '眼内', '眼部', '头部'].map((location) => (
                              <label key={location} className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  checked={medicalInquiry.rightEyeSymptoms.painLocation.includes(location)}
                                  onChange={(e) => {
                                    const updatedLocations = e.target.checked 
                                      ? [...medicalInquiry.rightEyeSymptoms.painLocation, location]
                                      : medicalInquiry.rightEyeSymptoms.painLocation.filter(loc => loc !== location);
                                    
                                    setMedicalInquiry({
                                      ...medicalInquiry, 
                                      rightEyeSymptoms: {
                                        ...medicalInquiry.rightEyeSymptoms,
                                        painLocation: updatedLocations
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2 text-sm">{location}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="block text-gray-700 mb-2">疼痛程度</label>
                          <div className="flex space-x-4">
                            <Radio.Group
                              value={medicalInquiry.rightEyeSymptoms.painDegree}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  rightEyeSymptoms: {
                                    ...medicalInquiry.rightEyeSymptoms,
                                    painDegree: e.target.value
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              {['轻度', '中度', '重度'].map((degree) => (
                                <Radio value={degree} key={degree}>{degree}</Radio>
                              ))}
                            </Radio.Group>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="block text-gray-700 mb-2">疼痛性质</label>
                          <div className="grid grid-cols-2 gap-2">
                            <Radio.Group
                              value={medicalInquiry.rightEyeSymptoms.painNature}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  rightEyeSymptoms: {
                                    ...medicalInquiry.rightEyeSymptoms,
                                    painNature: e.target.value
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              {
                                ['刺痛', '触痛', '胀痛', '灼痛', '疼痛'].map((nature) => (
                                  <Radio value={nature} key={nature}>{nature}</Radio>
                                ))
                              }
                            </Radio.Group>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <label className="block text-gray-700 mb-2">是否眼红</label>
                            <Radio.Group
                              value={medicalInquiry.rightEyeSymptoms.isRed ? 'yes' : 'no'}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  rightEyeSymptoms: {
                                    ...medicalInquiry.rightEyeSymptoms,
                                    isRed: e.target.value === 'yes'
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
buttonStyle="solid"
                            >
                              <Radio value="yes">是</Radio>
                              <Radio value="no">否</Radio>
                            </Radio.Group>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">是否眼干</label>
                            <Radio.Group
                              value={medicalInquiry.rightEyeSymptoms.isDry ? 'yes' : 'no'}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  rightEyeSymptoms: {
                                    ...medicalInquiry.rightEyeSymptoms,
                                    isDry: e.target.value === 'yes'
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="yes">是</Radio>
                              <Radio value="no">否</Radio>
                            </Radio.Group>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">是否眼胀</label>
                            <Radio.Group
                              value={medicalInquiry.rightEyeSymptoms.isSwollen ? 'yes' : 'no'}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  rightEyeSymptoms: {
                                    ...medicalInquiry.rightEyeSymptoms,
                                    isSwollen: e.target.value === 'yes'
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="yes">是</Radio>
                              <Radio value="no">否</Radio>
                            </Radio.Group>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">视力情况</label>
                            <Radio.Group
                              value={medicalInquiry.rightEyeSymptoms.visionStatus}
                              onChange={(e) => {
                                setMedicalInquiry({
                                  ...medicalInquiry, 
                                  rightEyeSymptoms: {
                                    ...medicalInquiry.rightEyeSymptoms,
                                    visionStatus: e.target.value
                                  }
                                });
                              }}
                              className="flex items-center h-[42px]"
                              optionType="button"
                              buttonStyle="solid"
                            >
                              <Radio value="normal">视力正常</Radio>
                              <Radio value="poor">视力较差</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        
                        {medicalInquiry.rightEyeSymptoms.visionStatus === 'declined' && (
                          <div className="grid grid-cols-2 gap-4 mb-3 bg-gray-50 p-3 rounded-md">
                            <div>
                              <label className="block text-gray-700 mb-2 text-sm">右眼原视力</label>
                              <input 
                                type="text" 
                                value={medicalInquiry.rightEyeSymptoms.originalVision}
                                onChange={(e) => {
                                  setMedicalInquiry({
                                    ...medicalInquiry, 
                                    rightEyeSymptoms: {
                                      ...medicalInquiry.rightEyeSymptoms,
                                      originalVision: e.target.value
                                    }
                                  });
                                }}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2 text-sm">右眼现视力</label>
                              <input 
                                type="text" 
                                value={medicalInquiry.rightEyeSymptoms.currentVision}
                                onChange={(e) => {
                                  setMedicalInquiry({
                                    ...medicalInquiry, 
                                    rightEyeSymptoms: {
                                      ...medicalInquiry.rightEyeSymptoms,
                                      currentVision: e.target.value
                                    }
                                  });
                                }}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 检查信息录入 - Only show if they have exam report */}
                {medicalInquiry.hasExamReport === 'yes' && (
                  <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-medium text-teal-600 mb-4">检查信息录入</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">右眼眼压</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.examData.rightEyePressure}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              rightEyePressure: e.target.value
                            }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">左眼眼压</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.examData.leftEyePressure}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              leftEyePressure: e.target.value
                            }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">右眼裸眼视力</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.examData.rightEyeNakedVision}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              rightEyeNakedVision: e.target.value
                            }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">左眼裸眼视力</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.examData.leftEyeNakedVision}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              leftEyeNakedVision: e.target.value
                            }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">右眼矫正视力</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.examData.rightEyeCorrectedVision}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              rightEyeCorrectedVision: e.target.value
                            }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">左眼矫正视力</label>
                        <input 
                          type="text" 
                          value={medicalInquiry.examData.leftEyeCorrectedVision}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              leftEyeCorrectedVision: e.target.value
                            }
                          })}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" 
                        />
                      </div>
                      
                      <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">裂隙灯结果</label>
                        <Radio.Group
                          value={medicalInquiry.examData.slitLampResult}
                          onChange={(e) => setMedicalInquiry({
                            ...medicalInquiry, 
                            examData: {
                              ...medicalInquiry.examData,
                              slitLampResult: e.target.value
                            }
                          })}
                          className="flex items-center h-[42px]"
                          optionType="button"
buttonStyle="solid"
                        >
                          <Radio value="leftAbnormal">左眼异常</Radio>
                          <Radio value="rightAbnormal">右眼异常</Radio>
                          <Radio value="bothAbnormal">双眼异常</Radio>
                          <Radio value="bothNormal">双眼正常</Radio>
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* 其他信息 */}
                <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-teal-600 mb-4">其他信息</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">既往史</label>
                      <div className="flex flex-wrap gap-4">
                        {['糖尿病', '高血压', '高血脂', '免疫系统疾病', '血液病', '肾病'].map(item => (
                          <label key={item} className="inline-flex items-center">
                            <input 
                              type="checkbox" 
                              checked={medicalInquiry.medicalHistory.includes(item)}
                              onChange={(e) => {
                                const updatedHistory = e.target.checked 
                                  ? [...medicalInquiry.medicalHistory, item]
                                  : medicalInquiry.medicalHistory.filter(h => h !== item);
                                
                                setMedicalInquiry({
                                  ...medicalInquiry,
                                  medicalHistory: updatedHistory
                                });
                              }}
                              className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                            />
                            <span className="ml-2">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">家族史</label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          '视网膜疾病', '青光眼', '白内障', '角膜疾病', 
                          '视神经病变', '全身性遗传病的眼部表现', '其他遗传性眼'
                        ].map(item => (
                          <label key={item} className="inline-flex items-center">
                            <input 
                              type="checkbox" 
                              checked={medicalInquiry.familyHistory.includes(item)}
                              onChange={(e) => {
                                const updatedHistory = e.target.checked 
                                  ? [...medicalInquiry.familyHistory, item]
                                  : medicalInquiry.familyHistory.filter(h => h !== item);
                                
                                setMedicalInquiry({
                                  ...medicalInquiry,
                                  familyHistory: updatedHistory
                                });
                              }}
                              className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                            />
                            <span className="ml-2">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">过敏史</label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          '花粉', '尘螨', '宠物皮屑毛发', '食物', 
                          '药物', '过敏性鼻炎', '哮喘'
                        ].map(item => (
                          <label key={item} className="inline-flex items-center">
                            <input 
                              type="checkbox" 
                              checked={medicalInquiry.allergyHistory.includes(item)}
                              onChange={(e) => {
                                const updatedHistory = e.target.checked 
                                  ? [...medicalInquiry.allergyHistory, item]
                                  : medicalInquiry.allergyHistory.filter(h => h !== item);
                                
                                setMedicalInquiry({
                                  ...medicalInquiry,
                                  allergyHistory: updatedHistory
                                });
                              }}
                              className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                            />
                            <span className="ml-2">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">疫水接触史</label>
                      <label className="inline-flex items-center">
                        <input 
                          type="checkbox" 
                          checked={medicalInquiry.epidemicContact}
                          onChange={(e) => {
                            setMedicalInquiry({
                              ...medicalInquiry,
                              epidemicContact: e.target.checked
                            });
                          }}
                          className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                        />
                        <span className="ml-2">去过疫区</span>
                      </label>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">手术史描述</label>
                      <textarea 
                        value={medicalInquiry.surgeryDescription}
                        onChange={(e) => setMedicalInquiry({
                          ...medicalInquiry,
                          surgeryDescription: e.target.value
                        })}
                        placeholder="写具体手术名，模板：有做过xx手术"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 min-h-[80px]" 
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <button 
                  onClick={handlePrevStep}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    上一步
                  </div>
                </button>
                <button 
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    下一步
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </button>
              </div>
            </section>
          )}
          
          {currentStep === 3 && (
            <section>
              <div className="bg-white rounded-lg shadow-sm p-6 flex-1 overflow-auto">
                <h2 className="text-xl font-medium text-gray-800 mb-6 border-l-4 border-teal-500 pl-2">主诉补充</h2>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">请选择受影响的眼部</label>
                  <Radio.Group
                    value={chiefComplaint.affectedEye}
                    onChange={(e) => handleComplaintEyeChange(e.target.value)}
                    className="flex items-center h-[42px]"
                    optionType="button"
buttonStyle="solid"
                  >
                    <Radio value="both">双眼</Radio>
                    <Radio value="left">左眼</Radio>
                    <Radio value="right">右眼</Radio>
                  </Radio.Group>
                </div>
                
                <div className={`grid ${chiefComplaint.affectedEye === 'both' ? 'grid-cols-2 gap-6' : 'grid-cols-1'}`}>
                  {/* Left Eye Complaint */}
                  {(chiefComplaint.affectedEye === 'left' || chiefComplaint.affectedEye === 'both') && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-md font-medium text-gray-700 mb-3">左眼</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2">症状</label>
                          <div className="flex flex-wrap gap-3">
                            {['出血', '红肿', '水疱', '瘙痒', '异物感', '眼睑痉挛', '睑球粘连'].map(symptom => (
                              <label key={symptom} className="inline-flex items-center bg-gray-50 p-1.5 rounded-md">
                                <input 
                                  type="checkbox" 
                                  checked={chiefComplaint.leftEyeSymptoms.symptoms.includes(symptom)}
                                  onChange={(e) => {
                                    const updatedSymptoms = e.target.checked 
                                      ? [...chiefComplaint.leftEyeSymptoms.symptoms, symptom]
                                      : chiefComplaint.leftEyeSymptoms.symptoms.filter(s => s !== symptom);
                                    
                                    setChiefComplaint({
                                      ...chiefComplaint,
                                      leftEyeSymptoms: {
                                        ...chiefComplaint.leftEyeSymptoms,
                                        symptoms: updatedSymptoms
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2 text-sm">{symptom}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-2">流泪</label>
                          <select 
                            value={chiefComplaint.leftEyeSymptoms.tearing}
                            onChange={(e) => setChiefComplaint({
                              ...chiefComplaint,
                              leftEyeSymptoms: {
                                ...chiefComplaint.leftEyeSymptoms,
                                tearing: e.target.value
                              }
                            })}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                          >
                            <option value="">请选择</option>
                            <option value="reflective">反射性流泪</option>
                            <option value="frequent">频率流泪</option>
                            <option value="overflow">泪溢</option>
                            <option value="crocodile">鳄鱼泪</option>
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-2">分泌物</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeSecretion" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.secretion}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      secretion: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeSecretion" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.secretion}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      secretion: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">烧灼感</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeBurning" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.burning}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      burning: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeBurning" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.burning}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      burning: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">畏光</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyePhotophobia" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.photophobia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      photophobia: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyePhotophobia" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.photophobia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      photophobia: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">泪液减少</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeTearReduction" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.tearReduction}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      tearReduction: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeTearReduction" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.tearReduction}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      tearReduction: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">硬结和肿物</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeLumps" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.lumpsAndMasses}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      lumpsAndMasses: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">有</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeLumps" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.lumpsAndMasses}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      lumpsAndMasses: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">无</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">复视</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeDiplopia" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.diplopia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      diplopia: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeDiplopia" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.diplopia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      diplopia: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">夜盲</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeNightBlindness" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.nightBlindness}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      nightBlindness: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeNightBlindness" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.nightBlindness}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      nightBlindness: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">视力模糊</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeBlurredVision" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.blurredVision}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      blurredVision: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeBlurredVision" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.blurredVision}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      blurredVision: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">虹视</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeIridescence" 
                                  value="yes"
                                  checked={chiefComplaint.leftEyeSymptoms.iridescence}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      iridescence: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="leftEyeIridescence" 
                                  value="no"
                                  checked={!chiefComplaint.leftEyeSymptoms.iridescence}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    leftEyeSymptoms: {
                                      ...chiefComplaint.leftEyeSymptoms,
                                      iridescence: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-2">成像障碍</label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              '对比敏感度下降', 
                              '色觉改变', 
                              '视野缺损（中心暗点等）', 
                              '眼前有漂浮物（含点状物、飞蝇、红色烟雾、环形物等）', 
                              '视物有遮挡（沙膜样或黑影样遮挡物、白天视物呈雾蒙状）', 
                              '"闪电"感视觉', 
                              '视物发黑', 
                              '能看到虫体或蠕动的阴影', 
                              '视功能差', 
                              '废用性斜视', 
                              '视物变暗或色调发黄，变形或变小'
                            ].map(disorder => (
                              <label key={disorder} className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  checked={chiefComplaint.leftEyeSymptoms.imagingDisorders.includes(disorder)}
                                  onChange={(e) => {
                                    const updatedDisorders = e.target.checked 
                                      ? [...chiefComplaint.leftEyeSymptoms.imagingDisorders, disorder]
                                      : chiefComplaint.leftEyeSymptoms.imagingDisorders.filter(d => d !== disorder);
                                    
                                    setChiefComplaint({
                                      ...chiefComplaint,
                                      leftEyeSymptoms: {
                                        ...chiefComplaint.leftEyeSymptoms,
                                        imagingDisorders: updatedDisorders
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2 text-sm">{disorder}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Right Eye Complaint */}
                  {(chiefComplaint.affectedEye === 'right' || chiefComplaint.affectedEye === 'both') && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="text-md font-medium text-gray-700 mb-3">右眼</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2">症状</label>
                          <div className="flex flex-wrap gap-3">
                            {['出血', '红肿', '水疱', '瘙痒', '异物感', '眼睑痉挛', '睑球粘连'].map(symptom => (
                              <label key={symptom} className="inline-flex items-center bg-gray-50 p-1.5 rounded-md">
                                <input 
                                  type="checkbox" 
                                  checked={chiefComplaint.rightEyeSymptoms.symptoms.includes(symptom)}
                                  onChange={(e) => {
                                    const updatedSymptoms = e.target.checked 
                                      ? [...chiefComplaint.rightEyeSymptoms.symptoms, symptom]
                                      : chiefComplaint.rightEyeSymptoms.symptoms.filter(s => s !== symptom);
                                    
                                    setChiefComplaint({
                                      ...chiefComplaint,
                                      rightEyeSymptoms: {
                                        ...chiefComplaint.rightEyeSymptoms,
                                        symptoms: updatedSymptoms
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2 text-sm">{symptom}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-2">流泪</label>
                          <select 
                            value={chiefComplaint.rightEyeSymptoms.tearing}
                            onChange={(e) => setChiefComplaint({
                              ...chiefComplaint,
                              rightEyeSymptoms: {
                                ...chiefComplaint.rightEyeSymptoms,
                                tearing: e.target.value
                              }
                            })}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                          >
                            <option value="">请选择</option>
                            <option value="reflective">反射性流泪</option>
                            <option value="frequent">频率流泪</option>
                            <option value="overflow">泪溢</option>
                            <option value="crocodile">鳄鱼泪</option>
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-2">分泌物</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeSecretion" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.secretion}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      secretion: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeSecretion" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.secretion}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      secretion: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">烧灼感</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeBurning" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.burning}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      burning: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeBurning" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.burning}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      burning: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">畏光</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyePhotophobia" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.photophobia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      photophobia: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyePhotophobia" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.photophobia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      photophobia: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">泪液减少</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeTearReduction" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.tearReduction}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      tearReduction: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeTearReduction" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.tearReduction}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      tearReduction: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">硬结和肿物</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeLumps" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.lumpsAndMasses}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      lumpsAndMasses: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">有</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeLumps" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.lumpsAndMasses}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      lumpsAndMasses: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">无</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">复视</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeDiplopia" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.diplopia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      diplopia: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeDiplopia" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.diplopia}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      diplopia: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">夜盲</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeNightBlindness" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.nightBlindness}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      nightBlindness: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeNightBlindness" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.nightBlindness}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      nightBlindness: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">视力模糊</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeBlurredVision" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.blurredVision}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      blurredVision: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeBlurredVision" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.blurredVision}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      blurredVision: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2">虹视</label>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeIridescence" 
                                  value="yes"
                                  checked={chiefComplaint.rightEyeSymptoms.iridescence}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      iridescence: true
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">是</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input 
                                  type="radio" 
                                  name="rightEyeIridescence" 
                                  value="no"
                                  checked={!chiefComplaint.rightEyeSymptoms.iridescence}
                                  onChange={() => setChiefComplaint({
                                    ...chiefComplaint,
                                    rightEyeSymptoms: {
                                      ...chiefComplaint.rightEyeSymptoms,
                                      iridescence: false
                                    }
                                  })}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2">否</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-2">成像障碍</label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              '对比敏感度下降', 
                              '色觉改变', 
                              '视野缺损（中心暗点等）', 
                              '眼前有漂浮物（含点状物、飞蝇、红色烟雾、环形物等）', 
                              '视物有遮挡（沙膜样或黑影样遮挡物、白天视物呈雾蒙状）', 
                              '"闪电"感视觉', 
                              '视物发黑', 
                              '能看到虫体或蠕动的阴影', 
                              '视功能差', 
                              '废用性斜视', 
                              '视物变暗或色调发黄，变形或变小'
                            ].map(disorder => (
                              <label key={disorder} className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  checked={chiefComplaint.rightEyeSymptoms.imagingDisorders.includes(disorder)}
                                  onChange={(e) => {
                                    const updatedDisorders = e.target.checked 
                                      ? [...chiefComplaint.rightEyeSymptoms.imagingDisorders, disorder]
                                      : chiefComplaint.rightEyeSymptoms.imagingDisorders.filter(d => d !== disorder);
                                    
                                    setChiefComplaint({
                                      ...chiefComplaint,
                                      rightEyeSymptoms: {
                                        ...chiefComplaint.rightEyeSymptoms,
                                        imagingDisorders: updatedDisorders
                                      }
                                    });
                                  }}
                                  className="h-4 w-4 text-teal-600 focus:ring-teal-500" 
                                />
                                <span className="ml-2 text-sm">{disorder}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <button 
                  onClick={handlePrevStep}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    上一步
                  </div>
                </button>
                <button 
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    完成问诊
                    <BotMessageSquare className="h-4 w-4 ml-1" />
                  </div>
                </button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;