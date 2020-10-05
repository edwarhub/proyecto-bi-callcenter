cube(`DimCampana`, {
  sql: `SELECT * FROM public.dim_campana`,
  
  joins: {
    
  },
  
  measures: {
    /*count: {
      type: `count`,
      drillMembers: [id]
    }*/
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
   cliente: {
      sql: `cliente`,
      type: `string`
    },
        
    campana_nombre: {
      sql: `nombre`,
      type: `string`
    }
  }
});
