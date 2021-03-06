import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Login',
    enter: 'Enter',
    register: 'Register',
    home: 'Home',
    search: 'Search',
    username: 'Username',
    password: 'Password',
    name: 'Name',
    location: 'Location',
    bio: 'Bio',
    skills: 'Skills/Expertise',
    contactInformation: 'Contact Information',
    resourceRequest: 'Resource Request',
    seeking: 'Opportunities Seeking',
    story: 'Story',
    stories: 'Stories',
    message: 'Message',
    messages: 'Messages',
    profile: 'Profile',
    createAccount: 'Create a Simul Account',
    inbox: 'Inbox',
    from: 'From:',
    date: 'Date:',
    subject: 'Subject:',
    content: 'Content:',
    senderContact: "Sender's contact info:",
    newStory: 'New Story',
    addStory: '+ Story',
    contact: 'Contact',
    send: 'Send',
    about: 'About',
    storiesBy: 'Stories by',
    post: 'Post',
    writeStoryHere: 'Write your story here.',
    photo: 'Photo',
    addPhoto: '+ Photo',
    upload: 'Upload',
    addImage: 'Add Image',
    go: 'Go',
    searchDot: 'Search...',
    latestStory: 'LATEST STORY',
  },
  ar: {
    login: 'دخول',
    username: 'اسم المستخدم',
    password: 'كلمه السر',
    name: 'اسم',
    enter: 'أدخل',
    register: 'تسجيل',
    home: 'منزل',
    search: 'بحث',
    bio: 'سيرة ذاتية',
    location: 'موقع',
    contactInformation: 'معلومات الاتصال',
    skills: 'مهارات',
    seeking: 'فرص تسعى',
    resourceRequest: 'الموارد أريد',
    story: 'قصة',
    stories: 'قصص',
    message: 'الرسالة',
    messages: 'رسائل',
    profile: 'الملف الشخصي',
    createAccount: 'إصنع حساب',
    inbox: 'صندوق الوارد',
    from: 'من',
    date: 'تاريخ',
    subject: 'موضوع',
    content: 'محتوى',
    senderContact: 'معلومات المرسل الاتصال',
    newStory: 'قصة جديدة',
    addStory: '+ قصة',
    contact: 'اتصال',
    send: 'إرسال',
    about: 'عن',
    storiesBy: 'قصص من',
    post: 'تابع',
    writeStoryHere: 'اكتب قصتك هنا',
    photo: 'صورة',
    addPhoto: '+ صورة',
    upload: 'تحميل',
    addImage: 'إضافة صورة',
    go: 'اذهب',
    searchDot: 'بحث...',
    latestStory: 'أحدث قصة',
  }
}

import Enter from './app/components/enter.js';

class simul extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <NavigatorIOS
        initialRoute={{
          component: Enter,
          title: 'Simul',
        }}
        style={{flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('simul', () => simul);
