import Spinner from "@/components/ui/atoms/Spinner";
import { LazyExoticComponent, ReactElement, Suspense } from "react";
import { Content } from "./styles";

export function withSuspense<T>(
  Component:
    | LazyExoticComponent<() => ReactElement<T>>
    | React.LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>
) {
  return (
    <Suspense
      fallback={
        <Content>
          <Spinner />
        </Content>
      }
    >
      <Component />
    </Suspense>
  );
}
