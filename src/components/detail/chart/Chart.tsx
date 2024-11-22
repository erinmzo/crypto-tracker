import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCoinHistory } from "../../../apis/coinApi";
import Error from "../../common/Error";
import Loading from "../../common/Loading";

function Chart() {
  const { coinId } = useParams();
  if (!coinId) return null;

  const {
    data: coinHistories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinHistory", coinId],
    queryFn: () => getCoinHistory(coinId),
    enabled: !!coinId,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (!coinHistories) return null;

  const series = [
    {
      name: "Close Price",
      data: coinHistories.map((history) => parseInt(history.close)).slice(0, 12),
      type: "area",
      color: "#71f797",
    },
    {
      name: "Open Price",
      data: coinHistories.map((history) => parseInt(history.open)).slice(0, 12),
      type: "area",
      color: "#689fff",
    },
    {
      name: "Low Price",
      data: coinHistories.map((history) => parseInt(history.low)).slice(0, 12),
      type: "area",
      color: "#f5fc29",
    },
    {
      name: "High Price",
      data: coinHistories.map((history) => parseInt(history.high)).slice(0, 12),
      type: "area",
      color: "#ff6b6b",
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          title: {
            text: "Coin Price History",
            align: "center",
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            opacity: [0.2, 0.2, 0.2, 0.2],
          },
          xaxis: {
            labels: {
              show: false,
            },
            type: "datetime",
            categories: coinHistories.map((history) => history.time_close).slice(0, 12),
          },
        }}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Chart;
