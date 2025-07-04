import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const ProfitLoss = () => {
  const data = {
    labels: ["Short Won", "Long Won"],
    datasets: [
      {
        label: "Trade",
        data: [71.8, 28.2],
        backgroundColor: ["rgba(99, 102, 241, 0.8)", "rgba(247, 166, 0, 0.7)"], // Soft indigo for Short, muted yellow-orange for Long
        borderWidth: 0,
        offset: 8,
      },
    ],
  };
  
  const options = {
    rotation: -90,
    circumference: 360,
    cutout: "50%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        display: true,
        color: "#e5e7eb", // Light gray for readability
        font: {
          weight: "bold",
          size: 18,
        },
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
  };
  
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      const fontSize = (height / 12).toFixed(2);
      ctx.font = `${fontSize}px Poppins, sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#e5e7eb"; // Light gray for readability
      ctx.fillText("Long/Short", width / 2, height / 2);
      ctx.save();
    },
  };
  

  const datas = {
    labels: [
      "2024-06-19", "2024-06-26", "2024-07-06", "2024-07-13",
      "2024-08-13", "2024-10-02", "2024-10-04", "2024-10-21",
      "2024-10-31", "2024-11-07", "2024-11-14", "2024-11-21",
      "2024-11-28", "2024-12-05", "2024-12-12", "2025-01-08",
    ],
    datasets: [
      {
        label: "Profit",
        data: [
          100, 300, 500, 400, 52000, 1000, -7000, 5000,
          9000, 8000, 6000, 3000, 4000, 2000, 3500, 2500,
        ],
        backgroundColor: (context) => {
          const value = context.raw;
          return value >= 0 ? "rgba(34, 197, 94, 0.8)" : "rgba(239, 68, 68, 0.8)"; // Proper green for profit, proper red for loss
        },
        borderRadius: 2,
        barThickness: 4,
      },
    ],
  };
  
  const optionss = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#e5e7eb" }, // Light gray for readability
        grid: { color: "rgba(0, 0, 0, 0.1)" }, // Subtle dark gradient
      },
      x: {
        ticks: { color: "#e5e7eb", maxRotation: 60, minRotation: 60 }, // Light gray for readability
        grid: { display: false },
      },
    },
  };
  

  const data2 = {
    labels: ["Won", "Lost"],
    datasets: [
      {
        label: "Trade",
        data: [85, 15],
        backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(239, 68, 68, 0.8)"], // Proper green for won, proper red for lost
        borderColor: "transparent",
        offset: "8",
      },
    ],
  };
  
  const options2 = {
    rotation: -150,
    circumference: 360,
    cutout: "40%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        display: true,
        color: "#e5e7eb", // Light gray for readability
        font: {
          weight: "bold",
          size: 18,
        },
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
  };
  
  const centerTextPlugin2 = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      const fontSize = (height / 12).toFixed(2);
      ctx.font = `${fontSize}px Poppins, sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#e5e7eb"; // Light gray for readability
      ctx.fillText("Win/Loss", width / 2, height / 2);
      ctx.save();
    },
  };
  

  return (
    <div className="relative grid w-full max-w-full grid-cols-1 gap-4 px-4 md:grid-cols-1 lg:grid-cols-12 md:px-0">
      {/* SINGLE OVERLAY applied to container */}
      <div
        className="absolute inset-0 z-30 hidden pointer-events-none lg:block"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)", // Maintained dark gradient
        }}
      ></div>

      {/* Long/Short */}
      <div className="lg:col-span-3 sm:col-span-1">
        <section className="h-full">
          <div className="h-full duration-300 ease-in-out border border-indigo-800 rounded-2xl bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent hover:border-indigo-600">
            <div className="flex items-center justify-between h-20 px-4 py-2 border-b border-indigo-900 opacity-85">
              <p className="text-base font-semibold text-white lg:text-xl font-poppins">
                Long/Short
              </p>
              <div className="text-white space-y-1 text-[0.65rem] sm:text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(99, 102, 241, 0.8)" }}></div>
                  <p>Shorts Won: 3246</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(247, 166, 0, 0.7)" }}></div>
                  <p>Longs Won: 1277</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center px-2 py-4">
              <div className="w-full max-w-[250px] mx-auto">
                <Doughnut data={data} options={options} plugins={[centerTextPlugin, ChartDataLabels]} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Profit vs Loss */}
      <div className="lg:col-span-6 sm:col-span-1">
        <div className="h-full py-5 duration-300 ease-in-out border border-indigo-800 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent hover:border-indigo-600 rounded-2xl">
          <h3 className="text-base font-bold text-center text-white lg:text-xl">Profit vs Loss</h3>
          <div className="flex justify-center my-2">
            <hr className="opacity-10 w-[90%]" />
          </div>
          <div className="flex items-center justify-center px-3 h-[200px] sm:h-[280px] md:h-[300px]">
            <div className="relative w-full h-full">
              <Bar data={datas} options={optionss} />
            </div>
          </div>
        </div>
      </div>

      {/* Win/Loss */}
      <div className="lg:col-span-3 sm:col-span-1">
        <section className="h-full">
          <div className="h-full duration-300 ease-in-out border border-indigo-800 rounded-2xl bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent hover:border-indigo-600">
            <div className="flex items-center justify-between h-20 px-4 py-2 border-b border-indigo-900 opacity-85">
              <p className="text-base font-semibold text-white lg:text-xl font-poppins">
                Win/Loss
              </p>
              <div className="text-white space-y-1 text-[0.65rem] sm:text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(239, 68, 68, 0.8)" }}></div>
                  <p>Lost Trades: 1028</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(34, 197, 94, 0.8)" }}></div>
                  <p>Won Trades: 8023</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center px-2 py-4">
              <div className="w-full max-w-[250px] mx-auto">
                <Doughnut data={data2} options={options2} plugins={[centerTextPlugin2, ChartDataLabels]} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfitLoss;