import { Request, Response } from 'express';
import {employeesentityDao} from '../dao/employeesentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let employeesentity = new employeesentityDao();

export class employeesentityService {
    
    constructor() { }
    
    public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeesentityService.ts: GpSearch')
     let  employeesentityData = req.query;
     employeesentity.GpSearch(employeesentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeesentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeesentityService.ts: GpGetAllValues')
     
     employeesentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeesentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeesentityService.ts: GpCreate')
     let  employeesentityData = req.body;
     employeesentity.GpCreate(employeesentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeesentityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeesentityService.ts: GpSearchRelationship')
     let  employeesentityData = req.query;
     employeesentity.GpSearchRelationship(employeesentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeesentityService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
    
    
    
}