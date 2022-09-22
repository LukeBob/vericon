import React from 'react'
import { Table } from 'reactstrap'


export default function ApTable(props) {

    
    const tableHeads = Object.keys(props.data.products[0])
    
  return (
    <Table
    bordered
    dark
    hover
    responsive
    size="sm"
    striped
    >
        <thead>
        <tr>
            {
                tableHeads.map((name, index) => (
                    <th key={index}>{name}</th>
                ))
            }
        </tr>
    </thead>
    <tbody>
        {
            props.data.products.map((item, index) => (
                <tr key={index}>
                    <th scope='row'>
                        {item.id}
                    </th>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.serialNumber}
                    </td>
                    <td>
                        {item.status}
                    </td>
                    <td>
                        {item.connectionStatus}
                    </td>
                    <td>
                        {item.deviceType}
                    </td>
                </tr>
            ))
        }
       
    </tbody>
    </Table>
  )
}
