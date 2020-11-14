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

router.get('/usuario/:id',(req:Request,res:Response)=>{

    //este es el parametro que se consulta desde la url
    const id = req.params.id
    const escaparcaracteres = MySQL.instancia.conexion.escape(id)
    // res.json({
    //     ok:true,
    //     mensaje:'todo esta bien api',
    //     id: id
    // })

    const query =`
    SELECT *
    FROM usuarios
    WHERE id_usuario = ${escaparcaracteres}`;

    MySQL.EjecutarQuery(query, (error:any, usuario:Object[] )=>{

        if(error){

            res.status(400).json({
                ok: false,
                errorms:error
                                
            });

        }else{
            res.json({
                ok:true,
                usuario: usuario[0]
            })
        }

    });
})

export default router; 