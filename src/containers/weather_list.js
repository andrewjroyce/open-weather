import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines } from 'react-sparklines';
import { SparklinesLine } from 'react-sparklines';
import GoogleMap from '../components/google_map';
import Chart from '../components/chart';

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps =  cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;
		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units='K'/>Temperature </td>  
				<td><Chart data={pressures} color="green" units='HPA'/>Pressure </td>  
				<td><Chart data={humidities} color="blue" units='percent'/>Percent </td>  
			</tr>
		);
	}

	render(){
		return (
		<table className='table table-hover'>
			<thread>
				<tr>
					<th>City</th>
					<th>Temperature (K)</th>
					<th>Pressure (HPA)</th>
					<th>Humidity (%)</th>
				</tr>
			</thread>
		<tbody>
			{this.props.weather.map(this.renderWeather)}
		</tbody>
		</table>
		); 
	}
}

function mapStateToProps({weather}){
	return { weather }; // { weather } === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);