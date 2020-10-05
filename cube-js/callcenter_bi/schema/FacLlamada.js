cube(`FacLlamada`, {
  sql: `SELECT * FROM public.fac_llamada`,

  joins: {
    DimCampana: {
      relationship: `belongsTo`,
      sql: `${FacLlamada}.dim_campana_id = ${DimCampana}.id`
    },
    DimSucursal: {
      relationship: `belongsTo`,
      sql: `${FacLlamada}.dim_sucursal_id = ${DimSucursal}.id`
    },
    DimGeografia: {
      relationship: `belongsTo`,
      sql: `${FacLlamada}.dim_geografia_id = ${DimGeografia}.id`
    },
    DimFecha: {
      relationship: `belongsTo`,
      sql: `${FacLlamada}.dim_fecha_id = ${DimFecha}.id`
    },
    DimAgente: {
      relationship: `belongsTo`,
      sql: `${FacLlamada}.dim_agente_id = ${DimAgente}.id`
    },
  },

  measures: {
    /*count: {
      type: `count`,
      drillMembers: [id]
    },*/
    cantidad_llamadas: {
      sql: `cantidad`,
      type: `sum`
    },
    segundos: {
      sql: `segundos`,
      type: `sum`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    campana_id: {
      sql: `dim_campana_id`,
      type: `number`
    },
    geografia_id: {
      sql: `dim_geografia_id`,
      type: `number`
    },
    fecha_id: {
      sql: `dim_fecha_id`,
      type: `number`
    },
    agente_id: {
      sql: `dim_agente_id`,
      type: `number`
    },
    sucursal_id: {
      sql: `dim_sucursal_id`,
      type: `number`
    }
  }
});
