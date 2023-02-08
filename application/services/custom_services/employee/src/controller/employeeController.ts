import { Request, Response } from 'express';
import { employeeService } from '../service/employeeService';
import { CustomLogger } from '../config/Logger'
let employee = new employeeService();

export class employeeController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpGetNounCreatedBy');
    })}


}