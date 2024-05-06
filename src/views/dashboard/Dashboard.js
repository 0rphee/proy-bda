import { React, useState, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2'
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
  CProgressStacked,
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

  return (
    <>
      <div>
        <h1>Datos Steam</h1>
        <p>En la siguiente sección se mostrarán los resultados obtenidos de la base de datos de Steam</p>
        <p></p>
      </div>
      <WidgetsBrand className="mb-4" withCharts />
      <DataGraph13></DataGraph13>
      <DataGraph7></DataGraph7>
      <DataGraph1></DataGraph1>
      <DataGraph2></DataGraph2>
      <DataGraph3></DataGraph3>
      <DataGraph6></DataGraph6>
      <DataGraph4></DataGraph4>
      
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
          label: "Número de juegos publicados"
        }
      ],
    }
    
    returnContent = <CChart type="bar" data={data} />;
  }

  return (
    <div>
      <h1>Top 10 Developers </h1>
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
    const data = {
      labels: jsonData.Publisher,
      datasets: [
        {
          data: jsonData.N_Games,
          label: "Número de juegos publicados"
        }
      ],
    }
    
    returnContent = <CChart type="bar" data={data} />;
  }

  return (
    <div>
      <h1>Top 10 Publishers </h1>
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

    returnContent = <CChart type="bar" options={options} data={data} />;
  }

  return (
    <div>
      <h1>Number of games published by genre and their average number of owners</h1>
      {returnContent}
    </div>
  )
}

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
              r: item.avg_owners / 1000000,
            } ]
          };
        });
    const data = {
      datasets:  resultData,
    };

    returnContent = <CChart type="bubble" data={data} />;
  }

  return (
    <div>
      <h1>Top 10 Games by Avg_owners</h1>
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
    const resultData = jsonData.slice(0, 10).map((item, index) => {
      return {
        label: item.name,
        data: [
          {
            x: index + 1 + ": " + item.name,
            y: item.average_playtime,
            r: item.avg_owners / 10000, // Dividir por un factor para hacer los círculos más pequeños
          },
        ],
      };
    });
    const data = {
      datasets: resultData,
    };

    // Renderizar el contenido del gráfico dependiendo de si hay una burbuja señalada o no
    returnContent = (
      <div>
        <Bubble options={options} data={data} />
      </div>
    );
  }

  return (
    <div>
      <h1>Top 10 Games by Avg_owners</h1>
      {returnContent}
    </div>
  );
};

const DataGraph13 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) => {
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent, 'http://127.0.0.1:8000/data7'); // data7 es a propósito
  }, []);

    if (jsonData) {
      const progressGroupData = jsonData.filter(item => item.name.includes("name")).map(item => ({
        title: item.name,
        value1: item.average_playtime,
        value2: item.avg_owners
      }));

      returnContent = (
        <>
          {progressGroupData.map((item, index) => (
            <div className="progress-group mb-4" key={index}>
              <div className="progress-group-prepend">
                <span className="text-body-secondary small">{item.name}</span>
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

  return (
    <div>
      <h1>Progress Groups</h1>
      {returnContent}
    </div>
  );
}


const DataGraph14 = () => {
  const [jsonData, setJsonData] = useState(null);

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) => {
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData,setReturnContent, 'http://127.0.0.1:8000/data7');
  }, []);

  if (jsonData) {
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

    returnContent = (
      <CChart type="line"
        style={{ height: '300px', marginTop: '40px' }}
        datasets={chartData}
        options={chartOptions}
      />
    )
  }

  return (
    <div>
      <h2 className="text-center mb-4">Average Playtime and Average Owners</h2>
      {returnContent}
    </div>
  );
};
export default Dashboard
