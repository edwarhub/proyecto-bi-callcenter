cube(`DimSucursal`, {
  sql: `SELECT * FROM public.dim_sucursal`,
  
  joins: {
    
  },
  
  measures: {
   /* count: {
      type: `count`,
      drillMembers: [id]
    }*/
  },
  
  dimensions: {
    nombre: {
      sql: `nombre`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
