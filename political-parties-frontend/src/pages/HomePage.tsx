import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { useParties } from "../hooks/useParties";
import { PartyItem } from "../components/PartyItem";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// const PARTIES = [
//   { id: "1", name: "Red party", votes: 35 },
//   { id: "2", name: "Blue party", votes: 42 },
//   { id: "3", name: "Green party", votes: 28 },
//   { id: "4", name: "Yello party", votes: 23 },
//   { id: "5", name: "Orange party", votes: 15 },
// ];

const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Votes graph",
      color: "white",
      font: { size: 16 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Amount of votes",
        color: "rgba(255, 255, 255, 0.7)",
      },
      ticks: { color: "rgba(255, 255, 255, 0.7)" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
    },
    x: {
      title: {
        display: true,
        text: "Political parties",
        color: "rgba(255, 255, 255, 0.7)",
        font: { size: 16, weight: 600 },
      },
      ticks: { color: "rgba(255, 255, 255, 0.7)" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
    },
  },
};

// const initialParties: Party[] = PARTIES.map((party, i) => ({
//   ...party,
//   borderColor: PARTY_COLORS[i].border,
//   color: PARTY_COLORS[i].bg,
// }));

export const HomePage = () => {
  const {
    status,
    addParty,
    chartData,
    removeParty,
    updatePartyName,
    updateVotes,
    parties,
  } = useParties();

  return (
    <div className="chart-container">
      <h1>Political Parties</h1>
      <h3>Connection status: {status}</h3>

      <div className="chart-wrapper">
        <Bar options={chartOptions} data={chartData} />
      </div>

      <div className="controls-section">
        <div className="controls-header">
          <h2>Party configuration</h2>
          <button className="btn-add" onClick={addParty}>
            {" "}
            + Add Party
          </button>
        </div>

        <div className="party-list">
          {parties.map((party) => (
            <PartyItem
              key={party.id}
              party={party}
              onNameChange={(newName) => updatePartyName(party.id, newName)}
              onVotesChange={updateVotes}
              onRemove={() => removeParty(party.id)}
              canRemove={parties.length > 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
