function say(value: string) {
    return "lly 说: "+ value
}
(document.querySelector('#ngm') as HTMLElement).innerHTML = say('你干嘛~哈哈')