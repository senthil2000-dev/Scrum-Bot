import Nav from '../../views/public/Nav.svelte';
import Topic from '../../views/public/Topic.svelte';
let topics = [
{
  id: 1,
  username: "Ajitha",
  upvotes: 20,
  topic: "react",
  keywords: ["React", "webrtc", "lexer"]
},
{
  id: 2,
  username: "Pradeep",
  upvotes: 20,
  topic: "vue",
  keywords: ["Vue", "webrtc", "lexer"]
},
{
  id: 3,
  username: "Bestin",
  upvotes: 200,
  topic: "lightning talks",
  keywords: ["Algos", "peerjs", "parser"]
}
];
const addtag = (e) => {
    topics = topics.map(element => element.id == e.detail.id ? {...element, keywords: [...element.keywords, e.detail.tag]} : element);
}