
import './App.css';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap'
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { useContext, useState } from 'react';
import { AppContext } from './components/AppContext';
import ApTable from './components/ApTable';


const BarChartContainer = styled.div`
flex: 1;
background-color: white;
height: 100%;
-webkit-box-shadow: -5px 7px 15px -1px #000000; 
box-shadow: -5px 7px 15px -1px #000000;
padding: 2rem;
border-radius: 4px;



`
const ChartContainer = styled.div`
margin: .2rem .8rem;
background-color: white;
height: 100%;
padding: 2rem 2rem;
border-radius: 4px;

position: relative;
border: solid 1px white;
-webkit-box-shadow: 2px 2px 7px 3px #000000; 
box-shadow: 2px 2px 7px 3px #000000;
cursor: pointer;
`
const Total = styled.h4`
font-size: 14px;
margin-top: 1.4rem;
text-transform: uppercase;
font-weight: 700;
`;

function App() {

 const [data, ] = useContext(AppContext);
 const [clicked, setClicked] = useState(false);
 const [type, setType] = useState(null)


 const handleClick = (product) => {
  setType(product)
  !clicked &&  setClicked(true)
 
 }


  return (
        <div style={{background: "#22233c"}} className="App">
          <Row style={{background: "#22233c", padding: "1.8rem 2rem 2rem 7rem"}}>
           { !clicked ? <BarChartContainer>
              {
                data && <BarChart data={data}/>
              }
              
            </BarChartContainer>
            
            :
            <BarChartContainer>
              <ApTable data={type}/>
            </BarChartContainer>
          }
          </Row>
          <Row style={{background: "#22233c", padding: "1.8rem 1rem 1rem 5.6rem"}}>
            {
              data && data.map((product, index) => (
                <Col className='pieCard' xxl={4} key={index} style={{position: 'relative', }}>
                  <ChartContainer onClick={() => handleClick(product)}>
                    <PieChart labels={["online", "offline"]} title={product.type} data={[product.percent.online, product.percent.offline]}/>
                    <PieChart labels={["ok", "failed"]}   data={[product.percent.notFailed, product.percent.failed]}/>
                    <Total>Total devices: {product.products.length}</Total>
                  </ChartContainer>
                
                </Col>
              ))
            }
          </Row>

        </div>

  );
}

export default App;
