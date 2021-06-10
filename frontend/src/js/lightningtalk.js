export let topic;
export let author;
export let date;
export let content;

let ellipses = true;
let length = 120;

const read = () => {
    length = (length == content.length) ? 120 : content.length;
    ellipses = !ellipses;
}