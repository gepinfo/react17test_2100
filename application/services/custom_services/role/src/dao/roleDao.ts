import * as mongoose from 'mongoose';
import roleModel from '../models/daomodels/role';
import { CustomLogger } from '../config/Logger'


export class roleDao {
    private role = roleModel;
    constructor() { }
    
    public async GpUpdate(roleData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into roleDao.ts: GpUpdate');

    

    
    
    
    this.role.findOneAndUpdate({ _id: roleData._id }, roleData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from roleDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into roleDao.ts: GpGetAllValues');

    

    
    
    
    this.role.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from roleDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(roleData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into roleDao.ts: GpCreate');

    let temp = new roleModel(roleData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from roleDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(roleData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into roleDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.role.aggregate(([
                        { $match: { $and: [{ created_by: roleData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from roleDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}