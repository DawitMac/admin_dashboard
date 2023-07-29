import React from 'react';
import { AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag,  FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import {  BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
//import product8 from './product8.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.image}
      alt="order-item"
    />
  </div>
);
export const gridOrderStatus = (props) => (
  <button
    type="button"
    //style={{ background: props.StatusBg }}
    style={{background:'#077E8C'}}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.status}
  </button>
);
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Addis Ababa',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Oromia',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Amhara',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'Addis Ababa', y: 46 },
    { x: 'Amhara', y: 27 },
    { x: 'Oromia', y: 26 },
  ],
  [
    { x: 'Addis Ababa', y: 37 },
    { x: 'Amhara', y: 23 },
    { x: 'Oromia', y: 18 },
  ],
  [
    { x: 'Addis Ababa', y: 38 },
    { x: 'Amhara', y: 17 },
    { x: 'Oromia', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Clothes',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Electronics',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Accessories',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },
      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      }
    ],
  },
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Yeabsira Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Sisay sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Yohannes completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};
export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const categoriesGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'name',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: '__typename',
    headerText: 'OrderType',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'stockAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'id',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  }
];
export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'Kidist Amare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1008,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1009,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1010,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'Kidist Amare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1012,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1013,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1014,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1015,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'Kidist Amare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1017,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1018,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1019,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1020,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'Kidist Amare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1022,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1023,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1024,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1025,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'Kidist Amare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1026,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1027,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1028,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1029,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1030,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1031,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1032,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1033,

    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1034,

    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1035,

    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1036,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1037,

    CustomerName: 'Semir Joseph',
    CustomerEmail: 'semirjoseph@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1038,
    CustomerName: 'Andualem Mekonen',
    CustomerEmail: 'andualemmekonen@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1039,
    CustomerName: 'Chernet Jemal',
    CustomerEmail: 'chernetjemal@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },
  {
    CustomerID: 1040,
    CustomerName: 'Kidist Amare',
    CustomerEmail: 'kidistamare@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'Ethiopia',
  },

];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikiyas Gashaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikiyas Gashaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikiyas Gashaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikiyas Gashaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikiyas Gashaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Simret Gedefaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikiyas Gashaw',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Natan Dawit',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Natnael Demeke',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Kalkidan Abebe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Simret Gedefaw',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Hussien',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Pawlos Henok',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Mikyas Taye',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'Ethiopia',
    ReportsTo: 'Alemu',
    EmployeeImage:
      avatar2,
  },
];
export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Addis Ababa',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Amhara',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Oromia',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const pieChartData = [
  { x: 'Google', y: 18, text: '21%' },
  { x: 'Social media', y: 8, text: '50%' },
  { x: 'Other', y: 15, text: '29%' },
  /* { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },  */
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

