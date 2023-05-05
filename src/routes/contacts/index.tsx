import { component$ } from "@builder.io/qwik";

const data = [1,2,3,4]

export default component$(() => {
    return (
        <div class="asdf">
            hi
            {data.map(v => <><div class="">{v}</div></>)}
        </div>
    )
}) 