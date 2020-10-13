import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  {
    id: 0,
    name: 'Segundos por campaña',
    vizState: {
      query: {
        measures: ['FacLlamada.segundos'],
        timeDimensions: [],
        dimensions: ['DimCampana.campana_nombre'],
        order: {},
        filters: [],
      },
      chartType: 'pie',
    },
  },
  {
    id: 1,
    name: 'Llamadas por día de la semana',
    vizState: {
      query: {
        measures: ['FacLlamada.cantidad_llamadas'],
        timeDimensions: [],
        dimensions: ['DimFecha.diaSemana'],
        order: {},
        filters: [],
      },
      chartType: 'bar',
    },
  },
  {
    id: 2,
    name: 'Llamadas por hora',
    vizState: {
      query: {
        measures: ['FacLlamada.cantidad_llamadas'],
        timeDimensions: [],
        dimensions: ['DimFecha.hora'],
        order: {},
        filters: [],
      },
      chartType: 'bar',
    },
  },
  {
    id: 4,
    name: 'Segundos por mes y campaña',
    vizState: {
      query: {
        measures: ['FacLlamada.segundos'],
        timeDimensions: [],
        dimensions: ['DimFecha.mesNombre', 'DimCampana.campana_nombre'],
        order: {},
        filters: [],
      },
      chartType: 'pie',
    },
  },
  {
    id: 3,
    name: 'Llamadas por agente',
    vizState: {
      query: {
        measures: ['FacLlamada.cantidad_llamadas'],
        timeDimensions: [],
        dimensions: ['DimAgente.nombre'],
        order: {
          'FacLlamada.cantidad_llamadas': 'desc',
        },
        filters: [],
      },
      chartType: 'table',
    },
  },
  {
    id: 5,
    name: 'Llamadas por mes',
    vizState: {
      query: {
        measures: ['FacLlamada.cantidad_llamadas'],
        timeDimensions: [],
        dimensions: ['DimFecha.mesNombre'],
        order: {},
        filters: [],
      },
      chartType: 'bar',
    },
  },
];

const DashboardPage = () => {
  const dashboardItem = (item) => (
    <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: 'center',
        padding: 12,
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
