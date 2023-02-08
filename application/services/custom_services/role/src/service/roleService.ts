import { Request, Response } from 'express';
import {roleDao} from '../dao/roleDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let role = new roleDao();

export class roleService {
    
    constructor() { }
    
    public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpUpdate')
     let  roleData = req.body;
     role.GpUpdate(roleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpGetAllValues')
     
     role.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpCreate')
     let  roleData = req.body;
     role.GpCreate(roleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpGetNounCreatedBy')
     let  roleData = { created_by: req.query.createdby };
     role.GpGetNounCreatedBy(roleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}