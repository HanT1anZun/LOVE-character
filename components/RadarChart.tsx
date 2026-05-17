"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import type { DimensionId, DimensionScores } from "@/lib/types";
import { getDimensionNames } from "@/lib/scoring";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  scores: DimensionScores;
}

const DIM_ORDER: DimensionId[] = [
  "passion_eros",
  "game_ludus",
  "companion_storge",
  "rational_pragma",
  "attachment_anxiety",
  "attachment_avoidance",
  "sacrifice_agape",
  "communication_open",
];

export default function RadarChart({ scores }: RadarChartProps) {
  const names = getDimensionNames();
  const labels = DIM_ORDER.map((d) => names[d]);
  const data = DIM_ORDER.map((d) => scores[d]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "维度得分",
        data,
        backgroundColor: "rgba(251, 113, 133, 0.15)",
        borderColor: "rgba(251, 113, 133, 0.7)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(251, 113, 133, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: { stepSize: 20, display: false },
        pointLabels: {
          font: { size: 12, family: "'Noto Sans SC', sans-serif" },
          color: "#525252",
        },
        grid: { color: "rgba(0,0,0,0.06)" },
        angleLines: { color: "rgba(0,0,0,0.06)" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.raw} 分`,
        },
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <Radar data={chartData} options={options as any} />
    </div>
  );
}
