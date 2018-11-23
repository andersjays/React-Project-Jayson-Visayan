import React from 'react';
import LandingPage from './landingpage';
import BenefitView from './benefitview'
import { browserHistory, Router, Route} from 'react-router';

const Body = () => (
	<Router history={browserHistory}>
			<Route exact path="/" component={LandingPage} />
			<Route path={"/benefits/:code/view"} component={BenefitView} />
	</Router>
);

export default Body;
