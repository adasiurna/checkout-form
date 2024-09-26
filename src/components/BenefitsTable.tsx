import React from 'react';
import { Table } from 'reactstrap';
import { PiCoffeeBold } from 'react-icons/pi';

const BenefitsTable: React.FC = () => {
  return (
    <Table borderless className="bg-light-grey mt-5">
      <thead><tr><td className="text-center" colSpan={2} >Why Choose LogoIpsum</td></tr></thead>
      <tbody>
        <tr>
          <td><PiCoffeeBold className="me-2" size={24} /></td>
          <td>
            <p className="mb-0"><b><small>90-Day Money Back Guarantee</small></b></p>
            <p className="mb-0"><small>We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.</small></p>
          </td>
        </tr>
        <tr>
          <td><PiCoffeeBold className="me-2" size={24} /></td>
          <td>
            <p className="mb-0"><b><small>Over 75,000+ Happy Customer</small></b></p>
            <p className="mb-0"><small>Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.</small></p>
          </td>
        </tr>
        <tr>
          <td><PiCoffeeBold className="me-2" size={24} /></td>
          <td>
            <p className="mb-0"><b><small>Professional Customer Support</small></b></p>
            <p className="mb-0"><small>Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.</small></p>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BenefitsTable;
