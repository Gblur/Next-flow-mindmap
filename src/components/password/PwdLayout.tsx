import React, {useEffect, useRef, useState} from "react";
import PwdTiles from "./PwdTiles";
import {Form} from "./Form";
import {Button, Divider} from "semantic-ui-react";
import {Searchbar} from "./Searchbar";
import {passwordGeneratorContent} from "./Pwdgenerator";
import {type} from "os";

type Props = {};

type PasswordInfo = {
  name: string;
  password: string;
};

export default function PwdLayout({}: Props) {
  const [passwordArray, setPasswordArray] = useState<PasswordInfo[]>([]);
  const [filter, setFilter] = useState<string>();
  const inputField = useRef<HTMLInputElement>(null);
  const searchField = useRef<HTMLInputElement>(null);

  const onPasswordSubmit = () => {
    const inputValue = inputField.current?.querySelector("input")?.value;
    if (inputField.current !== null && inputValue)
      setPasswordArray([
        ...passwordArray,
        {name: inputValue, password: passwordGeneratorContent()},
      ]);
  };

  const deleteAction = (payload: string) => {
    setPasswordArray((prevState) =>
      prevState.filter((item) => item.name !== payload)
    );
  };

  const onFilterChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const onBoardReset = () => {
    localStorage.clear();
    setPasswordArray([]);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("passwords") || "[]");
    if (items) {
      setPasswordArray(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwordArray));
  }, [passwordArray]);

  return (
    <div className="pwdContainer">
      <div className="pwdActions">
        <Form innerRef={inputField} />
        <Button.Group attached="bottom">
          <Button primary type="button" onClick={onPasswordSubmit}>
            Submit
          </Button>
          <Button color="red" type="button" onClick={onBoardReset}>
            Clear Board
          </Button>
        </Button.Group>
      </div>
      <Divider horizontal>Or</Divider>
      <div className="pwdFilterSection">
        <Searchbar filter={onFilterChanged} innerRef={searchField} />
        <div className="pwdTileLayout">
          {passwordArray.length
            ? passwordArray
                .filter((item) => {
                  return item.name
                    .toLocaleLowerCase()
                    .includes(filter?.toLocaleLowerCase() || "");
                })
                .map(({name, password}: PasswordInfo, id: any) => (
                  <PwdTiles
                    key={id}
                    name={name}
                    password={password}
                    setCurrentName={() => {
                      deleteAction(name);
                    }}
                  />
                ))
            : ""}
        </div>
      </div>
    </div>
  );
}
