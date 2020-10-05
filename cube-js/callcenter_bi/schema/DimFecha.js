cube(`DimFecha`, {
  sql: `SELECT * FROM public.dim_fecha`,
  
  joins: {
    
  },
  
  measures: {
    /*count: {
      type: `count`,
      drillMembers: [id]
    }*/
  },
  
  dimensions: {
    anho: {
      sql: `anho`,
      type: `number`
    },
    mes: {
      sql: `mes`,
      type: `number`
    },

    mesNombre: {
      sql: `mes_nombre`,
      type: `string`
    },

    dia: {
      sql: `dia`,
      type: `number`
    },
   
    diaSemana: {
      sql: `dia_semana`,
      type: `string`
    },

    hora: {
      sql: `hora`,
      type: `number`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    fecha: {
      sql: `fecha`,
      type: `time`
    }
  }
});
