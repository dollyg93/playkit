import {AppConstant} from './app-constant';

export const addButtons = [
    {name: 'ADD USER', key: AppConstant.USER},
    {name: 'ADD CLASS', key: AppConstant.CLASS},
    {name: 'ADD SCHOOL', key: AppConstant.SCHOOL},
    {name: 'ADD REGION', key: AppConstant.REGION},
    {name: 'ADD COUNTRY', key: AppConstant.COUNTRY}
];

export const groupTabs = [
    {tabId: 1, title: 'USERS', action: 'users'},
    {tabId: 2, title: 'CLASSES', action: 'classes'},
    {tabId: 3, title: 'SCHOOLS', action: 'schools'},
    {tabId: 4, title: 'REGIONS', action: 'regions'},
    {tabId: 5, title: 'COUNTRIES', action: 'country'},
];