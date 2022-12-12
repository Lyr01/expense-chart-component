import "./App.css";

import { useEffect, useState } from "react";
import Data from "../data.json";

function App() {
	const [amount, setAmount] = useState("");
	const [today, setToday] = useState("");

	const DisplayAmount = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const SingleAmount = e.currentTarget.firstChild?.textContent;
		setAmount(String(SingleAmount));
	};
	const HideAmount = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setAmount("");
	};

	useEffect(() => {
		setToday(
			new Date()
				.toLocaleString("en-Us", { weekday: "short" })
				.toLocaleLowerCase()
		);
	}, []);

	return (
		<main className="App">
			<div className="balance-container">
				<small className="balance-text">My balance</small>
				<span className="balance-number">$921.48</span>
			</div>
			<div className="spending-container">
				<h1 className="title">Spending - Last 7 days</h1>
				<div className="chart-container">
					<div className="charts">
						{Data.map((data) => {
							return (
								<div key={data.day} className="single-chart-container">
									<div>
										{amount === String(data.amount) ? (
											<div className="amount">${data.amount}</div>
										) : (
											<div className="emty-amount"></div>
										)}
									</div>

									<div
										className={
											today === data.day ? "chart today-chart" : "chart"
										}
										onMouseEnter={(e) => {
											DisplayAmount(e);
										}}
										onMouseLeave={(e) => {
											HideAmount(e);
										}}
										style={{ height: data.amount / 6 + "rem" }}
									>
										{data.amount}
									</div>
									<span className="day">{data.day}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className="separetor"></div>
				<div className="spending-footer">
					<div className="left">
						<small className="total-month-text">Total this month</small>
						<span className="total-month-number">$478.33</span>
					</div>
					<div className="right">
						<small className="percent-month">+2.4%</small>
						<small className="text-month">from last month</small>
					</div>
				</div>
			</div>

			<div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="https://lyr01.github.io/">Hamza Khan</a>.
			</div>
		</main>
	);
}

export default App;
