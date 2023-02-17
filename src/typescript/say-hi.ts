export default function say(value: string) {
    (document.querySelector('#ngm') as HTMLElement).innerHTML = "lly 说: "+ value
}