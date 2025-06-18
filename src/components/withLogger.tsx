/// <reference types="react" />
import React, { useEffect, type JSX } from "react";

export function withLogger<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    useEffect(() => {
      console.log(
        `Renderizando componente: ${Component.displayName || Component.name || "Component"}`
      );
    }, []);
    return <Component {...props} />;
  };
}
