<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { ref, watch } from "vue";
import { Line } from "vue-chartjs";

const props = defineProps({
  data: Array,
});

const chartKey = ref(0);

const verticalLinesPlugin = {
  id: "verticalLines",
  afterDraw(chart, _, options) {
    if (options.enabled) {
      const {
        ctx,
        chartArea: { bottom },
        scales: { x },
      } = chart;

      ctx.save();
      ctx.strokeStyle = options.lineColor; // Цвет вертикальных линий
      ctx.lineWidth = options.lineWidth; // Толщина вертикальных линий

      x.ticks.forEach((_, index) => {
        const xPos = x.getPixelForTick(index);
        ctx.beginPath();
        ctx.moveTo(xPos, bottom); // Начинаем линию на уровне метки 1
        ctx.lineTo(xPos, bottom + options.lineHeight); // Заканчиваем линию ниже метки
        ctx.stroke();
      });

      ctx.restore();
    }
  },
};

const xScalePadding = {
  id: "xScalePadding",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      scales: { x, y },
    } = chart;
    x._labelItems.forEach((label) => {
      label.textBaseline = "top";
      label.textOffset = 30;
    });
  },
};

const chartData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx; // Получаем элемент canvas
        const gradientFill = canvas.createLinearGradient(0, 0, 0, 1);
        gradientFill.addColorStop(0, "rgba(32, 214, 71, 0.1)");
        gradientFill.addColorStop(1, "rgba(32, 214, 71, 0.05)");
        return gradientFill;
      }, // Инициализируем как null, градиент добавим позже
      borderColor: "#20D647",
      borderWidth: 2, // Толщина линии (в пикселях)
      fill: true,
      pointBorderWidth: 2, // Толщина границы точки
      pointBorderColor: "white", // Цвет границы точки
      pointRadius: 5, // Размер точки
      pointBackgroundColor: "#20D647", // Цвет заливки точки
      // clip: false, // Отключаем обрезание
    },
  ],
});

const chartOptions = ref({
  responsive: true, // График будет адаптироваться под размеры контейнера
  maintainAspectRatio: false, // Отключаем сохранение пропорций
  aspectRatio: 2,
  plugins: {
    verticalLines: {
      enabled: true,
      lineColor: "#CFD7DF", // Цвет вертикальных линий
      lineWidth: 1, // Толщина вертикальных линий
      lineHeight: 20, // Высота вертикальных линий (под метками)
    },
    xScalePadding,
    tooltip: {
      callbacks: {
        title: () => "", // Отключаем заголовок
        label: (context) => context.raw, // Показываем только число
      },
      displayColors: false, // Отключаем цветной квадратик
      bodyColor: "#36A2EB",
      backgroundColor: "#20D647",
      bodyAlign: "center",
      padding: {
        top: 3,
        right: 25,
        bottom: 3,
        left: 5,
      },
      bodyFont: {
        size: 14,
        lineHeight: 1.125,
        weight: 500,
      },
      bodyColor: "#18213C",
      cornerRadius: 5,
      caretSize: 0, // Убираем стрелочку (указатель)
      position: "nearest", // Привязка к ближайшей точке
      yAlign: "bottom", // Тултип отображается сверху точки
      caretPadding: 10, // Расстояние между тултипом и точкой (10px)
    },
    legend: {
      display: false, // Отключаем легенду
    },
  },
  scales: {
    x: {
      afterFit: (context) => {
        context.height += 30;
      },
      grid: {
        display: false, // Убираем сетку по оси X
      },
      border: {
        color: "#CFD7DF", // Цвет нижней горизонтальной линии
      },
      ticks: {
        display: true, // Оставляем метки на оси X
      },
      ticks: {
        color: "#18213C", // Цвет меток
        font: {
          size: 14, // Размер шрифта
          weight: "medium", // Жирный шрифт (опционально)
        },
      },
    },
    y: {
      display: false, // Полностью убираем ось Y
    },
  },
});

// Метод для обновления данных графика
const updateChartData = () => {
  chartData.value.labels = props.data.map(
    (item) => `${item.day} ${item.month}`
  );
  chartData.value.datasets[0].data = props.data.map((item) => item.data);

  if (chartData.value.labels.length === 1) {
    chartData.value.labels.unshift(" ");
    chartData.value.labels.push(" ");
    chartData.value.datasets[0].data.unshift(0);
    chartData.value.datasets[0].data.push(0);
  }
  // chartData.value.labels = labels.length === 1 ? [labels[0], " "] : labels;
  // chartData.value.datasets[0].data =
  //   dataset.length === 1 ? [dataset[0], dataset[0]] : dataset;

  // chartData.value.datasets[0].data = props.data.map((item) => item.data);

  chartKey.value++;
};

// Следим за изменением пропса и обновляем график
watch(
  () => props.data,
  () => {
    updateChartData();
  },
  { deep: true, immediate: true }
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  verticalLinesPlugin,
  xScalePadding
);
</script>

<template>
  <div class="chart-qr">
    <Line :key="chartKey" :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/scss/includes/dashboard/mixins" as *;
.chart-qr {
  @include blockStyle($bg-color: white, $br-radius: 10px, $padding: 0);
  position: relative;
}
</style>
