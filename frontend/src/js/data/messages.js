import Nav from '../../views/public/Nav.svelte';
import Message from '../../views/public/Message.svelte';
import Reply from '../../views/public/Reply.svelte';
let message = {
  id: 1,
  name: "Ajitha",
  upvotes: 20,
  topic: "react",
  keywords: ["React", "webrtc", "lexer"],
  date: '8 Jun 2021',
  desc: 'Worked on ppl, reviewed prs in rembook and smart note'
};
let replies = [
{
  id: 2,
  name: "Pradeep",
  desc: 'Learnt a bit about communication protocols used in satellites for a gsoc pro'
},
{
  id: 3,
  name: "Bestin",
  desc: 'Since last mega scrum ,I worked on finishing touches of Dcop,PPL21 dailychallenges'
},
{
  id: 4,
  name: "Bestin",
  desc: 'exploring saucelabs for cross-browser testing , trying to integrate litcomponents in react'
},
{
  id: 5,
  name: "Pradeep",
  desc: 'Learnt a bit about communication protocols used in satellites for a gsoc pro'
},
{
  id: 6,
  name: "Ajitha",
  desc: 'Worked on ppl, reviewed prs in rembook and smart note'
}
];

const addtag = (e) => {
    message.keywords = [...message.keywords, e.detail.tag];
}
