import * as mongoose from 'mongoose';
import carsentityModel from '../models/carsentity';
import { CustomLogger } from '../config/Logger'


export class carsentityDao {
    private carsentity = carsentityModel;
    constructor() { }
    
    public async GpSearch(carsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into carsentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(carsentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.carsentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from carsentityDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(carsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into carsentityDao.ts: GpCreate');

    let temp = new carsentityModel(carsentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from carsentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}