import { Request, Response } from 'express';
import { carsentityService } from '../service/carsentityService';
import { CustomLogger } from '../config/Logger'
let carsentity = new carsentityService();

export class carsentityController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
carsentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into carsentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from carsentityController.ts: GpSearch');
    })}
public GpCreate(req: Request, res: Response) {
carsentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into carsentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from carsentityController.ts: GpCreate');
    })}


}