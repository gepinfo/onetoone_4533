import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class employeesentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/employeesentity/get/search', this.GpSearch);
this.router.get('/employeesentity', this.GpGetAllValues);
this.router.post('/employeesentity', this.GpCreate);
        this.router.get('/employeesentity/get/searchrelationship', this.GpSearchRelationship);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpSearch');
        new ApiAdapter().get(Constant.EMPLOYEESURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.EMPLOYEESURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpCreate');
        new ApiAdapter().post(Constant.EMPLOYEESURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) {
                                                    let response1:any;
                                                    let response2:any;
                                                    let finalresponse:any;
                                                    let relURL = '/carsentity/get/search?carid=';                                                
                                                    new CustomLogger().showLogger('info', 'Enter into employeesentityController.ts: GpSearch');
                                                    new ApiAdapter().get(Constant.EMPLOYEESURL + `${req.url}`)
                                                    .then((res: any) => res.response.json()).then(result => {
                                                        response1 = result;
                                                        new CustomLogger().showLogger('info', 'Exit from employeesentityController.ts: GpSearch');
                                                        new CustomLogger().showLogger('info', 'Enter into carsentityController.ts: GpSearch');
                                                        new ApiAdapter().get(`${Constant.CARSURL}`+`${relURL}`+`${response1[0].carid}`).then((res: any) => res.response.json()).then(result => 
                                                            {
                                                                response2 = result;
                                                                finalresponse = 
                                                                {
                                                                    "response1" : response1,
                                                                    "response2" : response2
                                                                }
                                                                new CustomLogger().showLogger('info', 'Exit from carsentityController.ts: GpSearch');
                                                                req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                                req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                            })
                                                    }).catch(err => {
                                                        res.send(err);
                                                    });
                                                }








}

