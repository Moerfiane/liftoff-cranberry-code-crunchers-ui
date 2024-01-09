import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table"


function Restaurants(){
const [data,setData] = useState([]);
const [location,setLocation] = useState('');
console.info("here")

const searchRestaurants =async()=>{
   const response = await  fetch(`http://localhost:8080/restaurants/${location}`);
   const results = await response.json();
   setData(results);
   console.log(results);
}

const setSearchLocation=(event)=>{
const location= event.target.value;
setLocation(location);
}
return (<div className="container">
 <InputGroup className="mb-3">
<Form.Control size="lg" type="text" htmlSize="300" onChange={setSearchLocation} placeholder="search with location e.g stlouis , stl , SaintLouis" />
<Button variant="primary" onClick={()=>searchRestaurants()}>Search</Button>
</InputGroup>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Restaurant Name</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
  { data.map((d,index)=>{
return (<tr key={index}>
  <td>{index}</td>
  <td> <Image src={d.image_url} className="restaurant-img"/></td>
  <td>{d.name}</td>
  <td>{`${d.location.address1} ,${d.location.city},${d.location.state}`}</td>
</tr>)


  })
}
  </tbody>
</Table>

</div>)




}


export default Restaurants;