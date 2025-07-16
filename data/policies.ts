import { Policy } from '../components/PolicyCard';

const policies: Policy[] = [
  {
    policyName: 'Life Secure Plan',
    policyNumber: 'LS123456',
    status: 'Active',
    nextPremiumDue: '2024-07-15',
    startDate: '2020-07-15',
    maturityDate: '2040-07-15',
    sumAssured: '₹10,00,000',
    premiumFrequency: 'Yearly',
    lastPremiumPaid: '2023-07-15',
    nextPremiumAmount: '₹12,000',
  },
  {
    policyName: 'Health Plus',
    policyNumber: 'HP654321',
    status: 'Lapsed',
    nextPremiumDue: '2023-12-01',
    startDate: '2018-12-01',
    maturityDate: '2038-12-01',
    sumAssured: '₹5,00,000',
    premiumFrequency: 'Monthly',
    lastPremiumPaid: '2023-11-01',
    nextPremiumAmount: '₹1,000',
  },
  {
    policyName: 'Child Education',
    policyNumber: 'CE789012',
    status: 'Active',
    nextPremiumDue: '2024-08-10',
    startDate: '2022-08-10',
    maturityDate: '2042-08-10',
    sumAssured: '₹15,00,000',
    premiumFrequency: 'Quarterly',
    lastPremiumPaid: '2024-05-10',
    nextPremiumAmount: '₹3,500',
  },
];

export default policies; 