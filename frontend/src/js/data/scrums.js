import Nav from '../../views/public/Nav.svelte';
import Scrum from '../../views/public/Scrum.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
export let currentRoute;

let {start, end} = currentRoute.namedParams;
let scrums, scrumMaster;
let error = null;
import DateRangeSelect from 'svelte-date-range-select';
 
const name = 'createdDate'; 
const heading = 'Created Date';
const endDateMax = new Date();
const startDateMin = new Date("January 1, 2015 12:00:00");

const labels = {
  notSet: 'not set',
  greaterThan: 'greater than',
  lessThan: 'less than',
  range: 'range',
  day: 'day',
  days: 'days',
  apply: 'Apply'
}

const startDateId = 'start_date_id' 
const endDateId = 'end_date_id' 

function handleApplyDateRange(data){
  let startDate = data.detail.startDate.split('-').reverse().join('-');
  let endDate = data.detail.endDate.split('-').reverse().join('-');
  window.location.href = `/scrum/${startDate}/${endDate}`;
}

onMount(async () => {
  scrumMaster = "Bestin B Thomas";
  if(start && end) {
    const response = await fetch(`${config.backendurl}/api/scrums/?start=${start}&end=${end}`);
    const resp = await response.json();
    if(resp.hasOwnProperty("error")) {
      scrums = resp.data.scrums;
    }
    else {
      error = resp["detail"]["error"]["error"];
    }
  }
  else {  
    const response = await fetch(`${config.backendurl}/api/scrums`);
    const resp = await response.json();
    scrums = resp.data.scrums;
  }
});
