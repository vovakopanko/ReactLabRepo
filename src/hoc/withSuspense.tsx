import Spinner from "@/components/ui/atoms/Spinner";
import { Suspense } from "react";
import { Content } from "./styles";

export const withSuspense = (Component: () => JSX.Element) => {
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
};
