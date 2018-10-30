import React, { useReducer, lazy, Suspense } from "react";
import { Provider, Context } from "./modules/common";
import { ReactComponent as SvgComponent } from "./logo.svg";
import reducer from "./reducer";
const Dashboard = lazy(() => import("./modules/Dashboard"));

const App = () => {
	const [state, dispatch] = useReducer(reducer, []);
	return (
		<Provider>
			<Context.Consumer>
				{wtf => (
					<>
						<div style={{ textAlign: "center", paddingTop: "2rem" }}>
							<SvgComponent height="48" width="48" />
						</div>
						<Suspense fallback={<h4>Loading...</h4>}>
							<Dashboard tasks={state} dispatch={dispatch} />
						</Suspense>
					</>
				)}
			</Context.Consumer>
		</Provider>
	);
};

export default App;
