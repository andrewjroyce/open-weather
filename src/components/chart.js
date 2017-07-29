import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Sparklines } from 'react-sparklines';
import { SparklinesLine } from 'react-sparklines';
import {SparklinesReferenceLine} from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length)

}

export default (props) => {
	return (
		<div>
            <Sparklines height={130} width={100} data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div> {average(props.data)} {props.units}</div>
		</div>
		);
	}

