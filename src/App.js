import React from "react";
import "./styles.css";
import { ViewportProvider, useViewport } from "./Viewport";

const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return (
    <div>{width < breakpoint ? <MobileComponent /> : <DesktopComponent />}</div>
  );
};

export default function App() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
