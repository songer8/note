import { message, Input, Button } from 'antd';
import React, { useEffect, useState, useRef } from 'react';

const EditableFormItem = props => {
  let { value, onChange, updateFn, validateFn } = props
  const [isEditable, setIsEditable] = useState(false);
  const actualValueRef = useRef();

  useEffect(() => {
    //记录初始值
    if (typeof actualValueRef.current === 'undefined') {
      actualValueRef.current = value;
    }
  }, [value])

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const handleCancel = () => {
    setIsEditable(false);
    console.log(actualValueRef.current)
    onChange(actualValueRef.current);
  }

  const handleUpdate = () => {
    validateFn().then(res => {
      updateFn(value).then(res => {
        setIsEditable(false);
      })
    })
  }

  return (
    <div>
      {isEditable &&
        <React.Fragment>
          <Input
            // className="margin-right"
            style={{ width: 200 }}
            // maxLength="11"
            value={value}
            onChange={handleChange}
          />
          <Button type="text" onClick={handleUpdate} size="small">保存</Button>
          <Button type="text" onClick={handleCancel} size="small">取消</Button>
        </React.Fragment>
      }
      {!isEditable &&
        <React.Fragment>
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            {value}
          </span>
          <Button
            type="text"
            onClick={() => setIsEditable(true)}
            size="small">
            修改
          </Button>
        </React.Fragment>
      }
    </div>
  )
}

export default EditableFormItem;