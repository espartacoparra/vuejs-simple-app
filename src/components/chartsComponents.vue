<template>
  <div class>
    <h4 class="mt-5 mb-5">Gráficos de ApexCharts</h4>
    <div class="row">
      <div class="col-4">
        <VueApexCharts width="400" type="bar" :options="options" :series="series"></VueApexCharts>
      </div>
      <div class="col-4">
        <VueApexCharts width="400" type="line" :options="options" :series="series"></VueApexCharts>
      </div>
      <div class="col-4">
        <VueApexCharts width="380" type="donut" :options="options2" :series="series2"></VueApexCharts>
      </div>
    </div>
    <h4 class="mt-5 mb-5">Gráficos de Highcharts</h4>
    <div class="row">
      <div class="col-4">
        <highcharts :options="chartOptions"></highcharts>
      </div>
      <div class="col-4">
        <highcharts :options="chartOptions"></highcharts>
      </div>
      <div class="col-4">
        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { Chart } from "highcharts-vue";

export default {
  name: "ChartsComponents",
  components: {
    highcharts: Chart,
    VueApexCharts
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
      options2: {},
      series2: [45, 55, 41, 17, 15],
      chartOptions: {
        title: {
          text: "Grafico simple"
        },
        series: [
          {
            name: "objetivo 1",
            data: [1, 2, 3] // sample data
          },
          {
            name: "objetivo 2",
            data: [8, 9, 20] // sample data
          },
          {
            name: "objetivo 3",
            data: [15, 22, 30] // sample data
          },
          {
            name: "objetivo 4",
            data: [1, 30, 40] // sample data
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>