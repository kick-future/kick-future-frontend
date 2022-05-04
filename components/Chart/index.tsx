import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

export default () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "All investments",
                lineTension: 0.2,
                borderColor: "black",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#fff",
                pointBackgroundColor: "#57FFAD",
                pointBorderWidth: 3,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "#57FFAD",
                pointHoverBorderColor: "#57FFAD",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    // TODO: if small height made less then 220
    return (
        <div>
            <Line options={options} data={data} width="350px" height="220px" />
        </div>
    );
};
