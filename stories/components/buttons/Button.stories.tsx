import { storiesOf } from "@storybook/react";
import React from "react";

import { Button } from "../../../src/components/";
import { CenterDecorator } from "../../decorators/CenterDecorator";

storiesOf("Button", module)
  .addDecorator(CenterDecorator)
  .add("default button", () => <Button>test</Button>);
