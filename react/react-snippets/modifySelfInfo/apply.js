import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input, message } from 'antd';
import { getProfileInfo, updateAddress, updateEmail, updatePhone } from '../../service/profile';
import EditableFormItem from './component/editableFormItem';
import '../../css/pages/account.scss';
import { useForm } from 'antd/lib/form/Form';

// 代理人账号设置
export default function Account() {
  const [viewData, setViewData] = useState({});
  const [editKey, setEditKey] = useState('');
  const [editData, setEditData] = useState({});
  const [isRefresh, setIsRefresh] = useState(true);
  const [form] = useForm()

  // input change
  const handleInput = useCallback(event => {
    let { name, value } = event.target;
    setEditData({ [name]: value })
  }, []);
  // 修改地址
  const fetchUpdateAddress = useCallback(() => {
    async function request() {
      await updateAddress({
        address: editData.address
      })
      message.success('地址修改成功');
      setEditKey('');
      setIsRefresh(true);
    }
    request();
  }, [editData]);
  // 修改邮箱
  const fetchUpdateEmail = useCallback(() => {
    let request = async () => {
      await updateEmail({
        email: editData.email
      })
      message.success('邮箱修改成功');
      setEditKey('');
      setIsRefresh(true);
    }
    request();
  }, [editData]);
  // 取消修改
  const cancelUpdate = useCallback(() => setEditKey(''), []);
  // 修改
  const handleEdit = useCallback((key) => {
    setEditKey(key);
    setEditData({ ...viewData });
  }, [viewData]);
  // 改变手机号
  const handleInputForPhone = useCallback((event) => setEditData({
    mobilePhone: event.target.value.replace(/[^\d]/g, '')
  }), []);
  // 修改手机号
  const fetchUpdatePhone = (mobilePhone) => {
    return updatePhone({ mobilePhone })
  }

  useEffect(() => {
    if (!isRefresh) {
      return;
    }
    async function fetch() {
      let viewData = await getProfileInfo();
      setViewData(viewData);
      form.setFieldsValue(viewData);
      setIsRefresh(false);

    }
    fetch()
  }, [isRefresh]);

  return <div className="main">
    <h3 className="main-t">账号设置</h3>
    <div className="main-body account">
      <Form
        autoComplete="off"
        className="account-form"
        form={form}
      >
        <Form.Item label="登录名：" name="loginName"></Form.Item>
        <Form.Item label="姓名：">{viewData.realName}</Form.Item>
        <Form.Item label="角色：">{viewData.roleLabel}</Form.Item>
        <Form.Item label="密码："> ******** <Button type="text"><Link to="/password">修改密码</Link></Button></Form.Item>
        <Form.Item label="手机：" name="mobilePhone" rules={
          [
            { required: true },
            { type: 'number', transform: value => Number(value) },
            { len: 11 }
          ]
        }>
          <EditableFormItem
            updateFn={fetchUpdatePhone}
            validateFn={() => form.validateFields(['mobilePhone'])}
          />
        </Form.Item>
        <Form.Item label="邮箱：">
          {
            editKey === 'email' ? <React.Fragment>
              <Input className="margin-right" style={{ width: 200 }} name="email" value={editData.email} onChange={handleInput} />
              <Button type="text" onClick={fetchUpdateEmail} size="small">保存</Button>
              <Button type="text" onClick={cancelUpdate} size="small">取消</Button>
            </React.Fragment> : <React.Fragment>
              <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{viewData.email}</span> <Button type="text" onClick={() => handleEdit('email')} size="small">修改邮箱</Button>
            </React.Fragment>
          }
        </Form.Item>
        <Form.Item label="地址：">
          {
            editKey === 'address' ? <React.Fragment>
              <Input className="margin-right" style={{ width: 200 }} name="address" value={editData.address} onChange={handleInput} />
              <Button type="text" onClick={fetchUpdateAddress} size="small">保存</Button>
              <Button type="text" onClick={cancelUpdate} size="small">取消</Button>
            </React.Fragment> : <React.Fragment>
              <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{viewData.address}</span> <Button type="text" onClick={() => handleEdit('address')} size="small">修改地址</Button>
            </React.Fragment>
          }
        </Form.Item>
      </Form>
    </div>
  </div>
}