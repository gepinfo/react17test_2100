import * as mongoose from 'mongoose';
import employeeModel from '../models/daomodels/employee';
import { CustomLogger } from '../config/Logger'


export class employeeDao {
    private employee = employeeModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpGetAllValues');

    

    
    
    
    this.employee.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpCreate');

    let temp = new employeeModel(employeeData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.employee.aggregate(([
                        { $match: { $and: [{ created_by: employeeData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}