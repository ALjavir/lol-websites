import {
  type RouteConfig,
  index,
  layout,
  route,
//   route,
//   prefix,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout/layout.tsx", [
    index("./routes/home.tsx"),
    route("news", "./routes/lolNews.tsx"),
    route("champions", "./routes/champions.tsx"),
    route("regions", "./routes/regions.tsx"),
    route("comics", "./routes/comics.tsx")

    // ...prefix("shop", [
    //   index("./routes/shop/index.tsx"),
    //   route(":id", "./routes/shop/product-details.tsx"),
    // ]),
  ]),

] satisfies RouteConfig;