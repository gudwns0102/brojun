import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Text } from "./Text";

interface IProps {
  className?: string;
  children: string;
}

const Content = styled(Text)``;

export function DynamicText({ children, ...props }: IProps) {
  const [text, setText] = useState("");
  useEffect(() => {
    const interval = setTimeout(() => {
      if (children === text) {
        clearInterval(interval);
        return;
      }
      setText(text + children[text.length]);
    }, 100);

    return () => clearTimeout(interval);
  }, [text, children]);

  useEffect(() => {
    setText("");
  }, [children]);

  return <Content {...props}>{text}</Content>;
}
