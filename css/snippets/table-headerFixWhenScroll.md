```jsx
<div className="ant-table ant-table-bordered">
            <div className="ant-table-title">雇员变更申请</div>
            <div className="ant-table-container">
                <div className="ant-table-content">
                    <table style={{ tableLayout: 'fixed' }} className={styles.table}>
                        <thead className="ant-table-thead">
                            <tr>
                                <th className="ant-table-cell">姓名</th>
                                <th className={`ant-table-cell" ${styles.idCard}`}>身份证号</th>
                                <th className="ant-table-cell">工种</th>
                                <th className="ant-table-cell">产品方案</th>
                                <th className="ant-table-cell">方案保费（元）</th>
                                <th className="ant-table-cell">操作</th>
                            </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                            {
                                toBeReplacedEmployees?.map((toBeReplacedEmployee, index) => {
                                    return (
                                        <tr className="ant-table-row" key={index}>
                                            <td className="ant-table-cell">
                                                <div>{toBeReplacedEmployee.name}</div>
                                                <Input
                                                    value={replacedEmployees[toBeReplacedEmployee.id!!]?.name}
                                                    onChange={(e) => handleNameOnChange(e, toBeReplacedEmployee.id!!)}
                                                />
                                            </td>
                                            <td className={`ant-table-cell" ${styles.idCard}`}>
                                                <div>{toBeReplacedEmployee.idCard}</div>
                                                <Input
                                                    value={replacedEmployees[toBeReplacedEmployee.id!!].idCard}
                                                    onChange={(e) => handleIdCardOnChange(e, toBeReplacedEmployee.id!!)}
                                                />
                                            </td>
                                            <td className="ant-table-cell">
                                                <div>{toBeReplacedEmployee.workTypeName}</div>
                                                {renderWorkTypeSelect(toBeReplacedEmployee)}
                                            </td>
                                            <td className="ant-table-cell">
                                                <div>{toBeReplacedEmployee.planName}</div>
                                                <Input value={toBeReplacedEmployee.planName} disabled />
                                            </td>
                                            <td className="ant-table-cell">
                                                <div>{toBeReplacedEmployee.insurancePremium}</div>
                                                <Input
                                                    value={
                                                        productDetail.canChangeWorkType ?
                                                            replacedEmployees[toBeReplacedEmployee.id!!].insurancePremium :
                                                            toBeReplacedEmployee.insurancePremium
                                                    }
                                                    disabled
                                                />
                                            </td>
                                            <td className={`ant-table-cell" ${styles.action}`}>
                                                <a onClick={() => handleCancel(index, toBeReplacedEmployee.id!!)}>取消</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
```

```scss
.table {
    width: 100%;
    thead, tbody, tr, td, th {
         display: block; 
    }

    tr:after {
        content: ' ';
        display: block;
        visibility: hidden;
        clear: both;
    }
    tbody {
        max-height: 50px;
        overflow-y: auto;
    }

    tbody .idCard, thead .idCard{
        width: 20%;
        float: left;
    }
    
    thead th, tbody td {
        width: 16%;
        float: left;
        display: table-cell;
    }

    .action {
        height: 87px;
        line-height: 55px;
    }
}
```