import React from 'react';
import { Table } from 'reactstrap';

interface TableComponentProps {
  productName: string;
  price: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ productName, price }) => {
  return (
    <Table className="bg-light-grey">
      <tbody>
        <tr>
          <td><img src="https://via.placeholder.com/50" alt="Product" /><b>{productName}</b></td>
          <td className="align-middle"><b>{price}</b></td>
        </tr>
        <tr>
          <td>Subtotal</td>
          <td>{price}</td>
        </tr>
        <tr>
          <td><h5>Total</h5></td>
          <td><h5>{price}</h5></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableComponent;
