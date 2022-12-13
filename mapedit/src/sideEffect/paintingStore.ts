import { hydratePaintings } from "../store/action"

const url =
    "../image-crusher-ui/image-crush-result.json"

export const attachToStore = store => {
    fetch(url)
        .then(res => res.json())
        .then(x => store.dispatch(hydratePaintings(x)))
}
