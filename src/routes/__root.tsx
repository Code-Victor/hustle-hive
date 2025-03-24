import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="font-urbanist">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
}
