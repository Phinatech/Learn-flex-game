import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Iconify from "./Iconify";

const Graphic = () => {
  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <div>
      <Wrapper text={count}>
        <Box></Box>
        <Iconify bgCol="red" />
      </Wrapper>
    </div>
  );
};

export default Graphic;

const Box = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  background-color: orange;
  right: 20px;
  top: 20px;
  z-index: -1;
`;

const Wrapper = styled.div<{ text: string }>`
  height: 100%;
  padding: 20px;
  display: flex;
  ${(props) => props.text};
  position: relative;
  z-index: 999;
  background-color: #1c1c1c;
  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
