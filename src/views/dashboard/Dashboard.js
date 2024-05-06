import { React, useState, useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import { Bar, Bubble } from 'react-chartjs-2'
import { CChart, CChartPie } from '@coreui/react-chartjs'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CProgressStacked,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsD
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifMx,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { json } from 'react-router-dom'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'The Abbey of Crime Extensum', value1: 190625, value2: 75000 },
    { title: 'The Banner Saga: Factions', value1: 95245, value2: 350000 },
    { title: 'The Secret of Tremendous Corporation', value1: 95242, value2: 150000 },
    { title: 'PRICE', value1: 63481, value2: 350000 },
    { title: 'Boundless', value1: 55204, value2: 35000 },
    { title: 'Shroud of the Avatar: Forsaken Virtues', value1: 54618, value2: 75000 },
    { title: 'X-Plane 11', value1: 44169, value2: 150000 },
    { title: 'nan', value1: 43632, value2: 35000 },
    { title: 'Fantasy Grounds', value1: 43074, value2: 35000 },
    { title: 'Screeps', value1: 38805, value2: 35000 }
  ]
  

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  return (
    <>
      <div>
        <h1>Datos Steam</h1>
        <p>En la siguiente sección se mostrarán los resultados obtenidos de la base de datos de Steam</p>
        <p></p>
      </div>
      <DataGraph15 withCharts={true} ></DataGraph15>
      <WidgetsBrand className="mb-4" withCharts />
      <CRow>
    <CCol xs={6}>
      <DataGraph5 />
    </CCol>
    <CCol xs={6}>
      <DataGraph5_1 />
    </CCol>
  </CRow>
      
      <DataGraph1></DataGraph1>
      <DataGraph2></DataGraph2>
      <DataGraph3></DataGraph3>
      <DataGraph4></DataGraph4>
      <DataGraph6></DataGraph6>
      <DataGraph7></DataGraph7>
      
    </>
  )
}

const fetchData = async (jsonDataSetter, returnContentSetter, url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    jsonDataSetter(data);
  } catch (error) {
    const errMsg = 'There was a problem with the fetch operation:';
    console.error(errMsg, error);
    returnContentSetter(<p>{errMsg}</p>);
  }
}

const DataGraph1 = () => {
  const [jsonData, setJsonData] = useState(null)

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent,'http://127.0.0.1:8000/data1');
  }, []) // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const options = {
      indexAxis: 'y',
      scales: {
        x: {
          title: {
            display: true,
            text: "Number of published games"
          }
        },
        y: {
          title: {
            display: true,
            text: "Developers"
          }
        }
      },
    };

    const data = {
      labels: jsonData.Developer,
      datasets: [
        {
          data: jsonData.N_Games,
          label: "Number of published games"
        }
      ],
    }
    
    returnContent = <CChart type="bar" options={options} data={data} />;
  }

  return (
    <div>
      <h1>Top 10 Developers (by # of published games)</h1>
      {returnContent}
    </div>
  )
}

const DataGraph2 = () => {
  const [jsonData, setJsonData] = useState(null)

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data2');
  }, []) // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: "Publishers"
          }
        },
        y: {
          title: {
            display: true,
            text: "Number of published games"
          }
        }
      },
    };
    const data = {
      labels: jsonData.Publisher,
      datasets: [
        {
          data: jsonData.N_Games,
          label: "Number of published games"
        }
      ],
    }
    
    returnContent = <CChart type="bar" options={options} data={data} />;
  }

  return (
    <div>
      <h1>Top 10 Publishers (by # of published games)</h1>
      {returnContent}
    </div>
  )
}

const DataGraph3 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data3');
  }, []);

  if (jsonData) {
    returnContent = ( 
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
          <CTableHeaderCell className="bg-body-tertiary">Developer</CTableHeaderCell>
          <CTableHeaderCell className="bg-body-tertiary">Positive Rating Percentage</CTableHeaderCell>
          <CTableHeaderCell className="bg-body-tertiary">Total Ratings</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {jsonData.Developer.map((developer, index) => {
            const positive_rating_percentage = parseFloat(jsonData.Positive_rating_percentage[index]);
            const total_ratings = Number(jsonData.Total_ratings[index]).toLocaleString();

            return (
            <CTableRow key={index}>
              <CTableDataCell>
                <div>{developer}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>
                  {positive_rating_percentage.toFixed(2)}%
                </div>
                <CProgress thin color="success" value={positive_rating_percentage} />
              </CTableDataCell>
              <CTableDataCell>
                <div>{total_ratings}</div>
              </CTableDataCell>
            </CTableRow>
          );
        })}
        </CTableBody>
      </CTable>
    )
  }

  return (
    <div>
      <h2 className="text-center mb-4">Top 10 most rated games</h2>
      {returnContent}
    </div>
  );
};

const DataGraph4 = () => {
  const [jsonData, setJsonData] = useState(null)

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data4');
  }, []) // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const options = {
      indexAxis: 'y',
      scales: {
        x: {
          title: {
            display: true,
            text: "# of games by genre"
          }
        },
        x2: {
          title: {
            display: true,
            text: "Average owners by genre"
          }
        },

        y: {
          title: {
            display: true,
            text: "Genres"
          }
        },
      },
    };
    const data = {
      labels: jsonData.genre,
      datasets: [
        {
          data: jsonData.genre_count,
          label: "# of games by genre",
          xAxisID: "x",
        },
        {
          data: jsonData.avg_owners_per_genre,
          label: "Average owners by genre",
          xAxisID: "x2",
        }
      ],
    }

    returnContent = <Bar options={options} data={data} />;
    // returnContent = <CChart type="bar" options={options} data={data} />;
  }

  return (
    <div>
      <h1>Number of games published by genre and their average number of owners</h1>
      {returnContent}
    </div>
  )
}

const DataGraph5 = () => {
  const [jsonData, setJsonData] = useState(null)

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data5');
  }, []) // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const data = {
      labels: jsonData.platform,
      datasets: [
        {
          data: jsonData.platform_count,
          // backgroundColor: backgroundColor,
          // hoverBackgroundColor: backgroundColor,
        },
      ],
    }
    returnContent = (
        <CCard className="mb-4">
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie data={data} />
          </CCardBody>
        </CCard>
      
    );
  }

  return (
    <div>
      <h1> prueba1</h1>
      {returnContent}
    </div>
  );
};

const DataGraph5_1 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data11');
  }, []);

  const setReturnContent = (content) =>{
    returnContent = content;
  };

  if (jsonData) {
    const data = {
      labels: jsonData.map(item => item.Category),
      datasets: [
        {
          data: jsonData.map(item => item.Category_Count),
        },
      ],
    };

    returnContent = (
      
      <CCard className="mb-4">
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie data={data} />
          </CCardBody>
        </CCard>
      
    );
  }

  return (
    <div>
      <h1> prueba2</h1>
      {returnContent}
    </div>
  );
};

const DataGraph6 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data6');
  }, []); // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const resultData =  jsonData.slice(0,25).map( (item) => {
          return {
            label: item.name,
            data: [ {
              x: item.price,
              y: item.positive_ratings,
              r: item.avg_owners / 2500000,
            } ]
          };
        });

    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: "Price (USD)"
          }
        },
        y: {
          title: {
            display: true,
            text: "% of Positive reviews"
          }
        },
      },

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return `${tooltipItem.dataset.label}:`;
            },
            afterLabel: (tooltipItem) => {
              const x = "(x) Price (USD): $" + tooltipItem.dataset.data[0].x.toLocaleString();
              const y = "(y) % Positive Reviews: " + tooltipItem.dataset.data[0].y.toLocaleString() + "%";
              const r = "(radius) Average # of owners: " + (tooltipItem.dataset.data[0].r * 2500000).toLocaleString();
              return `${x}\n${y}\n${r}`;
            }
          },
        },
      }
    };
    const data = {
      datasets:  resultData,
    };

    returnContent = <Bubble options={options} data={data} />;
    // returnContent = <CChart type="bubble" options={options} data={data} />;
  }

  return (
    <div>
      <h1>Top 100 Games by average # of owners, price and % of positive reviews</h1>
      {returnContent}
    </div>
  );
};

const DataGraph7 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) => {
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data7');
  }, []); // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const resultData = jsonData.map((item) => {
      return {
        label: item.name,
        data: [
          {
            y: item.average_playtime,
            x: item.avg_owners, // Dividir por un factor para hacer los círculos más pequeños
          },
        ],
      };
    });

    const options = {
      scales: {
        y: {
          title: {
            display: true,
            text: "Average total playtime (min)",
          }
        },
        x: {
          title: {
            display: true,
            text: "Average # of owners",
          }
        }
      },

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return tooltipItem.dataset.label;
            },
            afterLabel: (tooltipItem) => {
              const y = "(y) Average total playtime (min): " + tooltipItem.dataset.data[0].x.toLocaleString();
              const x = "(x) Average # of owners: " + tooltipItem.dataset.data[0].y.toLocaleString();
              return `${x}\n${y}`;
            }
          },
        },
      }
    };
    const data = {
      datasets: resultData,
    };

    // Renderizar el contenido del gráfico dependiendo de si hay una burbuja señalada o no
    returnContent = <Bubble options={options} data={data} />;
    // returnContent = <CChart type="bubble" options={options} data={data} />;
  }

  return (
    <div>
      <h1>Top 100 Games by average total playtime (per player)</h1>
      {returnContent}
    </div>
  );
};

// DataGraph15
const DataGraph15 = (props) => {
  const [jsonData, setJsonData] = useState(null)

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data11');
  }, []) // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const columns = jsonData.map((item) => {
      return (
        <CCol sm={6} xl={4} xxl={3} key={item.Category}>
          <CWidgetStatsD
            {...{
              chart: (
                <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className="text-white" style={{ fontSize: '20px' }}>{item.Category}</span>
                </div>
              ),
            }}
            values={[
              { title:"Count", value: Number(item.Category_Count).toLocaleString()},
              { title: "Average Owners" ,value: Number(item.avg_owners_per_cat).toLocaleString() },
            ]}
            style={{ '--cui-card-cap-bg': '#3b5998', }}
          />
        </CCol>
      );
    });

    returnContent = (
      <CRow className={props.className} xs={{ gutter: 4 }}>
      {columns}
      </CRow>
    )
  }

  return (
    <div>
      <h1>Categories Widget</h1>
      {returnContent}
    </div>
  );
}

export default Dashboard
