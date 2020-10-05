cube(`DimGeografia`, {
  sql: `SELECT * FROM public.dim_geografia`,
  
  joins: {
    
  },
  
  measures: {
    /*count: {
      type: `count`,
      drillMembers: [id]
    }*/
  },
  
  dimensions: {
    pais: {
      sql: `pais`,
      type: `string`
    },
    
    departamento: {
      sql: `departamento`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    ciudad: {
      sql: `ciudad`,
      type: `string`
    }
  }
});
