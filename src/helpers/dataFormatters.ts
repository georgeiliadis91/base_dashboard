import routes from "../views/routes";

// type this properly
// type route = typeof routes[0]; 

export const getRouteList = (selectedRoute: string)=> {
    const givenRouteSubItem = routes.find((route) => {return route.path===selectedRoute});
    return givenRouteSubItem?.children.map((child)=>child.path)
}