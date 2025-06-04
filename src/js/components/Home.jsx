import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Contador } from "./Contador";
import { Camera } from 'lucide-react';


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			

			<Contador seconds={20} />
		</div>
	);
};

export default Home;