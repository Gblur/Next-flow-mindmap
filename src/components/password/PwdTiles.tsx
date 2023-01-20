import {stringify} from "querystring";
import React, {useRef, useState} from "react";
import {Button, Icon, Input, Modal, Popup, Ref} from "semantic-ui-react";

export type PwdTiles = {
  name: string;
  password: string;
  setCurrentName: (name: any) => any;
};

export default function PwdTiles({
  name,
  password,
  setCurrentName = () => "",
}: PwdTiles) {
  const pwdlabelField = useRef<HTMLInputElement>(null);
  const [pwdIsVisible, setPwdIsVisible] = useState(false);

  const onEditLabelField = () => {
    pwdlabelField?.current?.querySelector("input")?.focus();
  };

  return (
    <div className="pwdTileContainer">
      <div>
        <Ref innerRef={pwdlabelField}>
          <Input fluid value={name} type="text" />
        </Ref>
        <Button
          floated="right"
          icon="edit"
          color="black"
          role="button"
          onClick={onEditLabelField}
        ></Button>
        <Button
          floated="right"
          icon="trash"
          color="red"
          role="button"
          onClick={() => {
            setCurrentName(name);
          }}
        ></Button>
      </div>
      <div className="pwdContent">
        <Input
          fluid
          value={password}
          type={pwdIsVisible ? "text" : "password"}
        />
        <Button
          floated="right"
          icon={pwdIsVisible ? "eye" : "eye slash"}
          color="blue"
          role="button"
          onClick={() => {
            setPwdIsVisible((prevState) => !prevState);
          }}
        ></Button>
        <Popup
          content="Content copied!"
          on="click"
          pinned
          trigger={
            <Button
              floated="right"
              icon="copy"
              color="black"
              role="button"
              onClick={() => {
                navigator.clipboard.writeText(password);
              }}
            ></Button>
          }
        />
      </div>
    </div>
  );
}
