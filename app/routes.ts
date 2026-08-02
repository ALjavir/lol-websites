import {
  type RouteConfig,
  index,
  layout,
//   route,
//   prefix,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout/layout.tsx", [
    index("./routes/home/home.tsx"),

    // ...prefix("shop", [
    //   index("./routes/shop/index.tsx"),
    //   route(":id", "./routes/shop/product-details.tsx"),
    // ]),
  ]),

//   layout("./routes/auth/layout.tsx", [
//     route("login", "./routes/auth/login.tsx"),
//     route("register", "./routes/auth/register.tsx"),
//   ]),
] satisfies RouteConfig;