import Nav from '../../views/public/Nav.svelte';
import Topic from '../../views/public/Topic.svelte';
import FootNote from '../../views/public/FootNote.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
let topics, filterval = "", filterFor = "";
export let currentRoute;
let {filterType, value} = currentRoute.namedParams;
let title = "", error = "";
let members, total;
let pageArr = [];

if(filterType === '/' || filterType === undefined) {
  filterType = "pages";
  value = 1;
} 

function navigate(page) {
  if(page>0 && page<=total)
    window.location.href = `/pages/${page}`;
}

function paginate(totalItems, currentPage = 1, pageSize = 9, maxPages = 4) {
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
  let token = localStorage.getItem('token');
  if(token == null)
    window.location.href = '/login';
  const memberResp = await fetch(`${config.backendurl}/api/members`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const memjson = await memberResp.json();
  members = memjson.data.members;

  if(filterType == "scrum_no") {
    const response = await fetch(`${config.backendurl}/api/scrums/${value}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const resp = await response.json();
    topics = resp.data.scrum.messages;
    title = "Scrum on " + resp.data.scrum.created_at;
  }
  else if(filterType == "search") {
    const response = await fetch(`${config.backendurl}/api/discussions/search?tag=${value}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const resp = await response.json();
    topics = resp.data.discussions;
  }
  else if(filterType == "author") {
    const response = await fetch(`${config.backendurl}/api/discussions/find/?author=${value}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const resp = await response.json();
    if(resp.hasOwnProperty("detail")) {
      topics = [];
    }
    else {
      topics = resp.data.discussions;
    }
  }
  else {
    const offset = (value-1)*9  || 0;
    const limit = 9;
    title = "Sharing Knowledge...";
    const response = await fetch(`${config.backendurl}/api/discussions/find/?limit=${limit}&offset=${offset}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const resp = await response.json();
    if(resp.hasOwnProperty("detail")) {
      error = "Page not found";
    }
    else {
      topics = resp.data.discussions;
      let pageResp = paginate(resp.data.totalSize, value);
      total = pageResp.totalPages;
      pageArr = pageResp.pages;
    }
  }
});
