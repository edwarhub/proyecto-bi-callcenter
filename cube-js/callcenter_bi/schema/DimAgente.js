cube(`DimAgente`, {
  sql: `SELECT * FROM public.dim_agente`,
  
  joins: {
    
  },
  
  measures: {
    /*count: {
      type: `count`,
      drillMembers: [id]
    }*/
  },
  
  dimensions: {
    genero: {
      sql: `genero`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    nombre: {
      sql: `nombre`,
      type: `string`
    },
    
    fechaNacimiento: {
      sql: `fecha_nacimiento`,
      type: `time`
    }
  }
});
