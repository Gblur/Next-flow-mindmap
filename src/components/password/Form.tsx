import React, {useRef, useState} from "react";
import {Input, Ref} from "semantic-ui-react";

type Props = {
  innerRef: React.Ref<HTMLInputElement>;
};

export const Form = ({innerRef}: Props) => {
  return (
    <Ref innerRef={innerRef}>
      <Input
        fluid
        error={false}
        type="text"
        placeholder="E.g. Origin"
        label="Add Element"
      />
    </Ref>
  );
};
