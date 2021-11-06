import routes from "../views/routes";

// type route = typeof routes[0]; type this properly

export const getRouteList = (selectedRoute: string)=> {
    const givenRouteSubItem = routes.find((route) => {return route.path===selectedRoute});
    return givenRouteSubItem?.children.map((child)=>child.path)
}