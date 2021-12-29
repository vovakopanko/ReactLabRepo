import Button from "@/components/ui/atoms/Button";
import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import React, { FC } from "react";

//add event handlers

class EventHandlers extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      console.log(gfd);
    } catch (error) {
      this.setState({ error });
      console.log({ error });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
          <span style={{ color: "red", fontSize: 24 }}>
            Error! {this.state.error.message}
          </span>
          ;
        </div>
      );
    }
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
        <div onClick={this.handleClick}>
          <Button title={"Click Me"} />
        </div>
      </div>
    );
  }
}

const About: FC = () => {
  const pageInfo = "Soon there will be content for About";
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PageContainerInfo pageInfo={pageInfo} />
      <EventHandlers />
    </div>
  );
};

export default About;
