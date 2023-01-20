import React, {createRef} from "react";
import {Input, Ref} from "semantic-ui-react";

type Props = {
  innerRef: React.Ref<HTMLInputElement>;
  filter: any;
};

export const Searchbar = ({innerRef, filter}: Props) => {
  return (
    <Ref innerRef={innerRef}>
      <Input
        fluid
        icon="search"
        type="text"
        label="Filter"
        placeholder="Search..."
        onChange={filter}
      />
    </Ref>
  );
};
