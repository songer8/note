// describe('MyComponent', () => { //describe函数，第一个参数给分组取个名字，第二个参数测试函数
//     it('should be true', () => { //每个it函数都相当于一个测试用例
//         const foo = true;
//         expect(foo).toBe(true); //expect里面是变量，toBe里面是预期结果
//     });
//     it('should be false', ()=> {
//         const foo = false;
//         expect(foo).toBe(true)
//     })
// })

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './MyComponent';

Enzyme.configure({adapter: new Adapter()}); 

describe('MyComponent', () => {
    it('should show text', () => {
        const wrapper = shallow(<MyComponent />); //浅渲染
        const text = wrapper.find('div div');//css选择器找元素
        expect(text.text()).toBe('此处有文本')
    })
    it('should hide text when button is clicked', () => {
        const wrapper = shallow(<MyComponent />);
        const button = wrapper.find('button');
        button.simulate('click'); //simulate函数触发Dom事件
        const text = wrapper.find('div div');
        expect(text.length).toBe(0)
    })
})
