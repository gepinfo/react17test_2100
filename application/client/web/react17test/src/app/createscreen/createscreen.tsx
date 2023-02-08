import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createscreen.scss";

import  {service}  from './createscreen.service';


class Createscreen extends React.Component<any, any> {
    roleitemArray: any = [];

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    employee : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        role: '',
    },
    rowData :[],options:[],
 }  }

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ employee: { ...this.state.employee, [e.target.name]: e.target.value } }) 
         }
        
              if(!e.target) { this.setState({employee: { ...this.state.employee, [e.role]: e.value } })}
    }
    

    componentDidMount() {
        this.state.employee.created_by = sessionStorage.getItem('email')||'{}'; 
          this.entityroleGpGetAllValues();
    }
    entityroleGpGetAllValues  () {
      this.test.entityroleGpGetAllValues().then((data:any) => {
            this.roleitemArray = data.data;
                                                                        this.setState({options: this.roleitemArray.map((value: any) => {
                                                                        return {name:"role",label:value.role,value:value.role}})})
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    GpCreate  () {
      this.test.GpCreate(this.state.employee).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">createscreen</h2>
            <input id="template-imcz" placeholder="Name" onChange={this.handlechange}
name="name" value={this.state.employee.name}className="input form-control "
/>
<div id="template-i14v">
    <Select id="template-i0tu" options={this.state.options} onChange={this.handlechange}
    value={this.state.employee.role}className="form-control "></Select>
</div>
<button id="template-ikm2" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Send</button>
            </>
        );
    };
};

export default Createscreen;