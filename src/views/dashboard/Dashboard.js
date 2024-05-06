import { React, useState, useEffect } from 'react'
import { Bar, Bubble } from 'react-chartjs-2'
import { CChart } from '@coreui/react-chartjs'
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
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
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

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Mexico', flag: cifMx },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Mexico', flag: cifMx  },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: {name: 'Mexico', flag: cifMx },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: {name: 'Mexico', flag: cifMx },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: {name: 'Mexico', flag: cifMx },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: {name: 'Mexico', flag: cifMx },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsBrand className="mb-4" withCharts />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}

                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-body-secondary small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Developer</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Calificación</CTableHeaderCell>
                    
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Pendiente
                    </CTableHeaderCell>
                    
                    <CTableHeaderCell className="bg-body-tertiary">Pendiente2</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
      <DataGraph14></DataGraph14>
      <DataGraph13></DataGraph13>
      <DataGraph7></DataGraph7>
      <DataGraph1></DataGraph1>
      <DataGraph7></DataGraph7>
      <DataGraph2></DataGraph2>
      <DataGraph3></DataGraph3>
      <DataGraph6></DataGraph6>
      
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
      scales: {
        x: {
          title: {
            display: true,
            text: "Developers"
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

  if (!jsonData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-center mb-4">Top 10 best positive ratings</h2>
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead className="text-nowrap">
        <CTableRow>
        <CTableHeaderCell className="bg-body-tertiary">Developer</CTableHeaderCell>
        <CTableHeaderCell className="bg-body-tertiary">Positive Rating Percentage</CTableHeaderCell>
        <CTableHeaderCell className="bg-body-tertiary">Total Ratings</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {jsonData.Developer.map((developer, index) => (
          <CTableRow key={index}>
            <CTableDataCell>
              <div>{developer}</div>
            </CTableDataCell>
            <CTableDataCell>
              <div>
                {jsonData.Positive_rating_percentage[index]}%
              </div>
              <CProgress thin color="success" value={parseFloat(jsonData.Positive_rating_percentage[index])} />
            </CTableDataCell>
            <CTableDataCell>
              <div>{jsonData.Total_ratings[index]}</div>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
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
  const [hoveredBubble, setHoveredBubble] = useState(null); // Estado para almacenar la burbuja señalada

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) => {
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data7');
  }, []); // Empty dependency array ensures the effect runs only once

  const handleBubbleHover = (event, item) => {
    if (item.length > 0) {
      // Si el cursor está sobre una burbuja
      const datasetIndex = item[0].datasetIndex;
      const index = item[0].index;
      const label = jsonData[datasetIndex].name;
      setHoveredBubble({ label, index }); // Establecer el estado con la etiqueta y el índice de la burbuja señalada
    } else {
      setHoveredBubble(null); // Si el cursor no está sobre una burbuja, restablecer el estado
    }
  };

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
            text: "Average total playtime (min)"
          }
        },
        x: {
          title: {
            display: true,
            text: "Average # of owners"
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
              return `${tooltipItem.dataset.label}:`;
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
    returnContent = (
      <div>
        <Bubble options={options} data={data} onHover={handleBubbleHover} />
        {hoveredBubble && (
          <p>Nombre: {jsonData[hoveredBubble.index].name}</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Top 100 Games by average total playtime (per player)</h1>
      {returnContent}
    </div>
  );
};

const DataGraph13 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;

  useEffect(() => {
    fetchData(setJsonData, 'http://127.0.0.1:8000/data7');
  }, []);

  useEffect(() => {
    if (jsonData) {
      const progressGroupData = jsonData.filter(item => item.title.includes("name")).map(item => ({
        title: item.title,
        value1: item.average_playtime,
        value2: item.avg_owners
      }));

      returnContent = (
        <>
          {progressGroupData.map((item, index) => (
            <div className="progress-group mb-4" key={index}>
              <div className="progress-group-prepend">
                <span className="text-body-secondary small">{item.title}</span>
              </div>
              <div className="progress-group-bars">
                <CProgress thin color="info" value={item.value1} />
                <CProgress thin color="danger" value={item.value2} />
              </div>
            </div>
          ))}
        </>
      );
    }
  }, [jsonData]);

  return (
    <div>
      <h1>Progress Groups</h1>
      {returnContent}
    </div>
  );
}


const DataGraph14 = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData(setJsonData, 'http://127.0.0.1:8000/data7');
  }, []);

  if (!jsonData) {
    return <p>Loading...</p>;
  }

  const chartData = {
    labels: jsonData.map(entry => entry.name),
    datasets: [
      {
        label: 'Average Playtime',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: jsonData.map(entry => entry.average_playtime)
      },
      {
        label: 'Average Owners',
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        data: jsonData.map(entry => entry.avg_owners)
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Average Playtime and Average Owners</h2>
      <CChartLine
        style={{ height: '300px', marginTop: '40px' }}
        datasets={chartData.datasets}
        options={chartOptions}
      />
    </div>
  );
};
export default Dashboard
