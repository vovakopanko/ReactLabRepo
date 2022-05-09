import Spinner from "@/components/ui/atoms/Spinner";
import { Suspense } from "react";
import styled from "styled-components";

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

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
