import { component$ } from "@builder.io/qwik";
import {CONTACTS, } from './fake-api'
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";

export const useRouteLoader = routeLoader$(() => {
    return CONTACTS
})

export const useRouteActions = routeAction$(() => {

})

export default component$(() => {

    const loaded = useRouteLoader()
    // const routeactions = useRouteActions()
    return (
        <div class="asdf">
            {loaded.value.map((v) => 
                <>
                    <div class="1" key={v.id}>
                    
                        <div class="">{v.name}</div>
                        <img src={v.avatar} />
                        <a href={v.github} >github</a>
                        <a href={v.twitter} >twitter</a>
                        <a href={v.linkedin} >linkedin</a>
                        {/* <button onClick$={routeactions}>route actions</button> */}                        
                    </div> 
                </>
            )}
            {/* {data.map(v => <><div class="">{v}</div></>)} */}
        </div>
    )
}) 