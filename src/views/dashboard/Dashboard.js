import { React, useState, useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import { Bar, Bubble, PolarArea } from 'react-chartjs-2'
import { CChart } from '@coreui/react-chartjs'
import classNames from 'classnames'

import {
  CCard,
  CCardBody,
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
  CWidgetStatsD
} from '@coreui/react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { json } from 'react-router-dom'

const Dashboard = () => {

  return (
    <>
      <div>
        <h1>Datos Steam</h1>
        <p>En la siguiente sección se mostrarán los resultados obtenidos de la base de datos de Steam</p>
        <p></p>
      </div>

      <DataGraph15 withCharts={true} ></DataGraph15>

      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Games by platform</CCardHeader>
            <CCardBody>
              <DataGraph5 />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Average estimated earnings per game by genre</CCardHeader>
            <CCardBody>
              <DataGraph20 />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <DataGraph3></DataGraph3>
      <DataGraph4></DataGraph4>

      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Top 10 Developers (by # of published games)</CCardHeader>
            <CCardBody>
              <DataGraph1></DataGraph1>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Top 10 Publishers (by # of published games)</CCardHeader>
            <CCardBody>
              <DataGraph2></DataGraph2>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

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

  // return (
  //   <div>
  //     <h1>Top 10 Developers (by # of published games)</h1>
  //     {returnContent}
  //   </div>
  // )
  return returnContent;
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
      indexAxis: 'y',
      scales: {
        y: {
          title: {
            display: true,
            text: "Publishers"
          }
        },
        x: {
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

  return returnContent;
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
      plugins: {
        title: {
          display: true,
          text: "Number of games published by genre, and the average number of owners for games in that genre.",
        },
    }
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
      <h2>Number of games published by genre and their average number of owners</h2>
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
    const options = {
      plugins: {
        title: {
          display: true,
          text: "Number of games available by platform",
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return "# of games available: " + tooltipItem.raw.toLocaleString();
            },
          },
        },
      }    };

    const data = {
      labels: jsonData.platform,
      datasets: [
        {
          data: jsonData.platform_count,
        },
      ],
    }
    returnContent = <PolarArea type="polarArea" options={options} data={data} />;
  }

  return returnContent;
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
        title: {
          display: true,
          text: "Top 100 games by number of owners, displayed by their ('x' axis) Price (USD), ('y' axis) % of Positive Reviews (from the total review number), and (radius) the their number of owners.",
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
      <h2>Top 100 Games by average # of owners, price and % of positive reviews</h2>
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
        title: {
          display: true,
          text: "Top 100 Games with the highest ('y' axis) average total playtime (per player) displayed by the ('x' axis) average number of owners.",
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
      <h2>Top 100 Games by average total playtime (per player)</h2>
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
    );
  }

  return (
    <div>
      <h2>Category information</h2>
      {returnContent}
    </div>
  );
}

const DataGraph20 = () => {
  const [jsonData, setJsonData] = useState(null)

  let returnContent = <p>Loading...</p>;
  const setReturnContent = (content) =>{
    returnContent = content;
  };

  useEffect(() => {
    fetchData(setJsonData, setReturnContent,'http://127.0.0.1:8000/data20');
  }, []) // Empty dependency array ensures the effect runs only once

  if (jsonData) {
    const options = {
      scales: {
        y: {
          title: {
            display: true,
            text: "Average estimated earnings per game (USD)"
          }
        },
        x: {
          title: {
            display: true,
            text: "Genres"
          }
        }
      },
    };

    const data = {
      labels: jsonData.genre,
      datasets: [
        {
          data: jsonData.avg_estimated_earnings_per_game,
          label: "Average estimated earnings per game (USD)"
        }
      ],
    }

    returnContent = <CChart type="bar" options={options} data={data} />;
  }

  return returnContent;
}

export default Dashboard
