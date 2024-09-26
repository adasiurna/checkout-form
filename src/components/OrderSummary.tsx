import React from 'react';
import { Table } from 'reactstrap';

interface OrderSummaryProps {
  productName: string;
  price: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ productName, price }) => {
  return (
    <Table className="bg-light-grey">
      <tbody>
        <tr>
          <td><img className="me-1" src="https://via.placeholder.com/50" alt="Product" /><b>{productName}</b></td>
          <td className="text-end align-middle"><b>{price}</b></td>
        </tr>
        <tr>
          <td>Subtotal</td>
          <td className="text-end">{price}</td>
        </tr>
        <tr>
          <td><h5>Total</h5></td>
          <td className="text-end"><h5>{price}</h5></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OrderSummary;
