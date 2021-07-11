import Nav from '../../views/public/Nav.svelte';
import Topic from '../../views/public/Topic.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
let topics, filterval = "", filterFor = "";
export let currentRoute;
let {filterType, value} = currentRoute.namedParams;
console.log(filterType, value);
let title = "";
let members, total;
let pageArr = [];

if(filterType === '/' || filterType === undefined) {
  filterType = "pages";
  value = 1;
} 

function navigate(page) {
  console.log(total);
  if(page>0 && page<=total)
    window.location.href = `/pages/${page}`;
}

function paginate(totalItems, currentPage = 1, pageSize = 9, maxPages = 3) {
  let totalPages = Math.ceil(totalItems / pageSize);
  if (currentPage < 1) {
      currentPage = 1;
  } else if (currentPage > totalPages) {
      currentPage = totalPages;
  }

  let startPage, endPage;
  if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
  } 
  else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
    } 
    else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
    } 
    else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

  return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
  };
}

onMount(async () => {
  const memberResp = await fetch(`${config.backendurl}/api/members`);
  const memjson = await memberResp.json();
  members = memjson.data.members;

  if(filterType == "scrum_no") {
    const response = await fetch(`${config.backendurl}/api/scrums/${value}`);
    const resp = await response.json();
    topics = resp.data.scrum.messages;
    title = "Scrum on " + resp.data.scrum.created_at;
  }
  else if(filterType == "search") {
    const response = await fetch(`${config.backendurl}/api/discussions/search?tag=${value}`);
    const resp = await response.json();
    topics = resp.data.discussions;
  }
  else if(filterType == "author") {
    const response = await fetch(`${config.backendurl}/api/discussions/?author=${value}`);
    const resp = await response.json();
    console.log(resp);
    if(resp.hasOwnProperty("detail")) {
      topics = [];
    }
    else {
      topics = resp.data.discussions;
    }
  }
  else {
    let pageResp = paginate(32, value);
    total = pageResp.totalPages;
    pageArr = pageResp.pages;
    const offset = pageResp.startIndex;
    const limit = 9;
    title = "Sharing Knowledge...";
    const response = await fetch(`${config.backendurl}/api/discussions/?limit=${limit}&offset=${offset}`);
    const resp = await response.json();
    topics = resp.data.discussions;
  }
});
