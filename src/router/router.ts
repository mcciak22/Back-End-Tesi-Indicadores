import {Router, Request , Response} from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/usuarios',(req:Request,res:Response)=>{

    const query =`
    SELECT *
    FROM usuarios`;

    MySQL.EjecutarQuery(query, (error:any, usuarios:Object[] )=>{

        if(error){

            res.status(400).json({
                ok: false,
                errorms:error
                                
            });

        }else{
            res.json({
                ok:true,
                usuarios:usuarios
            })
        }

    });

    // res.json({
    //     ok:true,
    //     mensaje:'todo esta bien api'
    // })
})

router.get('/usuarios/:id',(req:Request,res:Response)=>{

    const id = req.params.id

    res.json({
        ok:true,
        mensaje:'todo esta bien api',
        id: id
    })
})

export default router; 