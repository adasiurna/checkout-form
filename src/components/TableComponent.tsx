import React from 'react';
import { Table } from 'reactstrap';

interface TableComponentProps {
  productName: string;
  price: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ productName, price }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td><img src="https://via.placeholder.com/50" alt="Product" /> {productName}</td>
          <td>{price}</td>
        </tr>
        <tr>
          <td>Subtotal</td>
          <td>{price}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{price}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableComponent;
