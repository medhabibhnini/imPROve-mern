/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {Component} from "react";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table,
} from "reactstrap";





class ListUser extends Component  {



    constructor(props){
        super(props);  
        this.state = {data: [],
        }
    }
    componentDidMount(){
        axios.get(`https://localhost:3000/tables`)
        .then(res => {
          const data = res.data;
          this.setState({ data });
        })
        console.log("bon")
    }


render() {
  return (

    this.state.data.map((student)=>




    <div className="content">
        <Row>
          <Col md="8">
            <Card>
    < Table responsive>
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>{student.lastname}</th>
            <th>Job Position</th>
            <th className="text-center">Since</th>
            <th className="text-right">Salary</th>
            <th className="text-right">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td className="text-center">2013</td>
            <td className="text-right">€ 99,225</td>
            <td className="text-right">
                <Button className="btn-icon" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{` `}
                <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Manuel Rico</td>
            <td>Manager</td>
            <td className="text-center">2012</td>
            <td className="text-right">€ 99,201</td>
            <td className="text-right">
                <Button className="btn-icon btn-round" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{` `}
                <Button className="btn-icon btn-round" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                <Button className="btn-icon btn-round" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>{` `}
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>Alex Mike</td>
            <td>Designer</td>
            <td className="text-center">2012</td>
            <td className="text-right">€ 99,201</td>
            <td className="text-right">
                <Button className="btn-icon btn-simple" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{` `}
                <Button className="btn-icon btn-simple" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                <Button className="btn-icon btn-simple" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>{` `}
            </td>
        </tr>
    </tbody>
</Table>
</Card>
          </Col>
         
        </Row>
      </div>
    )
  );
}
}

export default ListUser;
