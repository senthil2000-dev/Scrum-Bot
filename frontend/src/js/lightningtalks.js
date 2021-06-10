import Nav from '../../views/public/Nav.svelte';
import Lightningtalk from '../../views/public/Lightningtalk.svelte';
let talk = {};
let talks = [
    {
      id: 1,
      author: "Ajitha",
      topic: "react",
      date: '8 Jun 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      author: "Pradeep",
      topic: "vue",
      date: '10 Jun 2021',
      content: 'Learnt a bit about communication protocols used in satellites for a gsoc pro'
    },
    {
      id: 3,
      author: "Bestin",
      topic: "lightning talks",
      date: '9 Jun 2021',
      content: 'Since last mega scrum ,I worked on finishing touches of Dcop,PPL21 dailychallenges'
    },
    {
      id: 4,
      author: "Bestin",
      topic: "lightning talks",
      date: '5 Jun 2021',
      content: 'exploring saucelabs for cross-browser testing , trying to integrate litcomponents in react'
    },
    {
      id: 5,
      author: "Pradeep",
      topic: "vue",
      date: '10 Jun 2021',
      content: 'Learnt a bit about communication protocols used in satellites for a gsoc pro'
    },
    {
      id: 6,
      author: "Ajitha",
      topic: "react",
      date: '8 Jun 2021',
      content: 'Worked on ppl, reviewed prs in rembook and smart note'
    }
];
const addTalk = (e) => {
    e.preventDefault();
    console.log(talk);
    talks = [...talks, talk];
}