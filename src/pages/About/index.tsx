import AuthRedirect from "@/hoc/withAuthRedirect";
import { colors } from "@/styles/palette";
import styled from "styled-components";
import terraria from "../../assets/images/terraria.png";
import Button from "@/components/ui/atoms/Button";

const About = () => {
  return (
    <AuthRedirect>
      <Blur>
        <span style={{ fontSize: 21, color: colors.WHITE, padding: 20 }}>
          Edit card
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: colors.WHITE,
                fontSize: 21,
                paddingBottom: 10,
                paddingTop: 10,
              }}
            >
              Card image
            </span>
            <img src={terraria} width={250} height={400} />
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: colors.WHITE,
                fontSize: 21,
                paddingBottom: 10,
                paddingTop: 10,
              }}
            >
              Information
            </span>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Name
              </span>
              <input style={{ width: 150 }} />
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Category
              </span>
              <input style={{ width: 150 }} />
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Price
              </span>
              <input style={{ width: 150 }} />
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Image
              </span>
              <input style={{ width: 150 }} />
            </div>
            <div style={{ display: "flex", paddingBottom: 10 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Description
              </span>
              <textarea style={{ width: 150 }} />
            </div>
            <div style={{ display: "flex", paddingBottom: 10 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Age
              </span>
              <select>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </select>
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18 }}>
                Platform
              </span>
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                PC
              </span>
              <input type="checkbox" />
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Playstation 5
              </span>
              <input type="checkbox" />
            </div>
            <div style={{ display: "flex", paddingBottom: 5 }}>
              <span style={{ color: colors.WHITE, fontSize: 18, width: "30%" }}>
                Xbox One
              </span>
              <input type="checkbox" />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ paddingRight: 10 }}>
                <Button
                  title={"Submit"}
                  width={100}
                  type="secondary"
                  onClick={() => console.log("EDIT")}
                />
              </div>
              <div style={{ paddingLeft: 10 }}>
                <Button
                  title={"Delete card"}
                  width={100}
                  type="secondary"
                  onClick={() => console.log("EDIT")}
                />
              </div>
            </div>
          </div>
        </div>
      </Blur>
      {/* <PageContainer>
        <PageContainerInfo pageInfo={pageInfo} />
      </PageContainer> */}
    </AuthRedirect>
  );
};

export const PageContainer = styled.div`
  justify-content: center;
  font-size: 25;
`;

export const Blur = styled.div`
  padding: 10px;
  backdrop-filter: blur(2px) grayscale(0.5);
`;

export default About;
