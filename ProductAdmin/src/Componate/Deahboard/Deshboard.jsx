import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { BsCart } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { SiCodemagic } from "react-icons/si";
import { MdOutlineAttachMoney } from "react-icons/md";

function Dashboard() {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
    legend: {
      position: 'top',
      height: 40, 
      offsetY: 0, 
      offsetX: 0, 
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49],
    },
  ]);
  const [barChartOptions, setBarChartOptions] = useState({
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
  });

  const [barChartSeries, setBarChartSeries] = useState([
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49],
    },
  ]);


  const [donutChartOptions, setDonutChartOptions] = useState({
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
  });

  const [donutChartSeries, setDonutChartSeries] = useState([44, 55, 41, 17, 15]);

  const [radarChartOptions, setRadarChartOptions] = useState({
    chart: {
      id: 'radar-chart',
      foreColor: '#ffffff', 
      background: '#2c2c2c',
    },
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    theme: {
      mode: 'dark', 
    },
  });

  const [radarChartSeries, setRadarChartSeries] = useState([
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 60],
    },
  ]);

  const donutChartOptionss = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    theme: {
      mode: 'light', 
    },
  };

  const stackedColumnChartOptions = {
    chart: {
      id: 'stacked-column-chart',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    theme: {
      mode: 'light', 
    },
  };

  const stackedColumnChartSeries = [
    {
      name: 'Series 1',
      data: [30, 40, 50],
    },
    {
      name: 'Series 2',
      data: [10, 20, 30],
    },
    
  ];

  const donutChartSeriess = [30, 40, 30];


  return (    
    <div className='bg-secondary-subtle'>
      <div className="row">
        <div className="col-3 d-flex justify-content-center">
          <div className="card-body border ps-3 py-3 bg-light">
            <div className='d-flex'>
              <div>
                <h6>TOTAL ORDER</h6>
                <h3> 14253 </h3>
                <a href="#">8.25</a><span className='text-secondary'> NEW SESSION TODAY</span>
              </div>
              <div className='fs-1 d-flex align-items-center text-secondary ps-5'><BsCart /></div>
            </div>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={330}
              width={313}
            />
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card-body border ps-3 py-3  bg-light">
            <div className='d-flex'>
              <div className='fw-bolder'>
                <h6>NEW CUSTOMER</h6>
                <h3> 532 </h3>
                <a href="#">0.6%</a><span className='text-secondary'> BALANCE RATE WEEKLY</span>
              </div>
              <div className='fs-1 d-flex align-items-center text-secondary ps-5'><BsPeople /></div>
            </div>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={330}
              width={313}
            />
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card-body border ps-3 py-3  bg-light">
            <div className='d-flex pb-5'>
              <div className='fw-bolder'>
                <h6>TOP COUPONS</h6>
                <h3>78%</h3>
                <a href="#">1.5%</a><span className='text-secondary'>WEEKLY AVG.SESSIONS</span>
              </div>
              <div className='fs-1 d-flex align-items-center text-secondary ps-5'><SiCodemagic /></div>
            </div>
            {/* Donut Chart */}
            <Chart
              options={donutChartOptionss}
              series={donutChartSeriess}
              type="donut"
              height={170}
              width={313}
            />
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card-body border ps-3 py-3  bg-light">
            <div className='d-flex pb-5'>
              <div className='fw-bolder'>
                <h6>TOTAL REVENUE</h6>
                <h3>$85000</h3>
                <a href="#">10.25</a><span className='text-secondary'>COMPALANTIOS WEEKLY</span>
              </div>
              <div className='fs-1 d-flex align-items-center text-secondary ps-5'><MdOutlineAttachMoney /></div>
            </div>
            {/* Radar Chart */}
            <Chart
              options={radarChartOptions}
              series={radarChartSeries}
              type="radar"
              height={170}
              width={313}
            />
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-4">
          <div className='d-flex pb-3 border-bottom  border-primary-subtle'>
            <div className='w-50 text-center'>
              <img src="https://mannatthemes.com/robotech/default/assets/images/widgets/user.png" alt="" className='w-50' />
            </div>
            <div className='text-center'>
              <h6>Guide to Analyze and Optimize Your Online Business</h6>
            </div>
          </div>
          {/* Donut Chart */}
          <div className='pt-4'>
            <Chart
              options={donutChartOptions}
              series={donutChartSeries}
              type="donut"
              width={400} 
            />
          </div>
        </div>
        <div className="col-8">
          <h6 className='fs-bold'>Salesh Report</h6>
          {/* Stacked Column Chart */}
          <Chart
            options={stackedColumnChartOptions}
            series={stackedColumnChartSeries}
            type="bar"
            width={800}
          />
        </div>
      </div>
      <div className="row d-flex">

        <div className="col-6 ps-3">
          <div className="col bg-white">
            <h4>
              Most Populer Products
            </h4>
            <p className='text-secondary border-bottom border-dark m-0'>New Products Last Week 5</p>
            <div className="col  justify-content-between d-flex bg-secondary-subtle border-bottom border  border-secondary-subtle align-items-center py-4">
              <h6>PRODUCT</h6>
              <h6>PRICE</h6>
              <h6>SELL</h6>
              <h6>STATUS</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6 className='w-25'> <img src="https://mannatthemes.com/robotech/default/assets/images/products/01.png" alt="" className='w-25' /></h6>
              <h6>$50</h6>
              <h6>450</h6>
              <h6 className='text-success'>stock</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6 className='w-25'><img src="https://mannatthemes.com/robotech/default/assets/images/products/03.png" alt="" className='w-25' /></h6>
              <h6>$25</h6>
              <h6>369</h6>
              <h6 className='text-danger'>Sold</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6 className='w-25'><img src="https://mannatthemes.com/robotech/default/assets/images/products/02.png" alt="" className='w-25' /></h6>
              <h6>$68</h6>
              <h6>657</h6>
              <h6 className='text-danger'>sold</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6 className='w-25'><img src="https://mannatthemes.com/robotech/default/assets/images/products/04.png" alt="" className='w-25' /></h6>
              <h6>$96</h6>
              <h6>895</h6>
              <h6 className='text-success'>stock</h6>
            </div><div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6 className='w-25'><img src="https://mannatthemes.com/robotech/default/assets/images/products/03.png" alt="" className='w-25' /></h6>
              <h6>$25</h6>
              <h6>365</h6>
              <h6 className='text-danger'>sold</h6>
            </div>
          </div>
        </div>

        <div className="col-6 ps-3">
          <div className="col bg-white">
            <h4>
              Earnings Reports
            </h4>
            <p className='text-secondary border-bottom border-dark m-0'>Earnings Reports Last Week $18532</p>
            <div className="col  justify-content-between d-flex bg-secondary-subtle border-bottom border  border-secondary-subtle align-items-center py-4">
              <h6>DATE</h6>
              <h6>ITEAM COUNT</h6>
              <h6>TEX</h6>
              <h6>EARNINGS</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6> 01 january</h6>
              <h6>50</h6>
              <h6>$70</h6>
              <h6>$15000</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6>02 january</h6>
              <h6>25</h6>
              <h6>$60</h6>
              <h6>$25000</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6>03 january</h6>
              <h6>68</h6>
              <h6>$85</h6>
              <h6>$95780</h6>
            </div>
            <div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6>04 janiary</h6>
              <h6>96</h6>
              <h6>$64</h6>
              <h6>$125360</h6>
            </div><div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6>05 january</h6>
              <h6>25</h6>
              <h6>$98</h6>
              <h6>$254620</h6>
            </div><div className="col  justify-content-between d-flex border-bottom border  border-secondary-subtle align-items-center py-3">
              <h6>06 january</h6>
              <h6>36</h6>
              <h6>$44</h6>
              <h6>$54666</h6>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Dashboard;
