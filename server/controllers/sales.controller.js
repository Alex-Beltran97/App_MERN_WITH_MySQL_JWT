import { pool } from '../db.js';

export const postSaleRequest = async (req,res)=>{
  const { id_cliente, conceptos } = req.body;

  const saleData = {
    id_cliente,
    total:conceptos.map(({precioUnitario,cantidad})=>precioUnitario*cantidad).reduce((a,b)=>a+b),
    fecha:new Date()
  };

  try{
    const  [resultTransaction] = await pool.query("START TRANSACTION");
    try{
      const  [resultSale] = await pool.query("INSERT INTO venta SET ?",saleData);
      conceptos.forEach(async item => {
        const [ resultConcept ] = await pool.query(
          "INSERT INTO concepto SET ?",
          {
            id_venta:resultSale.insertId,
            ...item,
          }
        );
        await pool.query("COMMIT");
      });
  
      res.json({
        ...saleData,
        ...conceptos
      });
  
    }catch(error){
      throw new Error(error.message);
    };
    
  }catch(error){
    const  [resultTransaction] = await pool.query("ROLLBACK");
    res.status(500).json({message:error.message});
  }
};  