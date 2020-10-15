import React, { useState } from "react";
import { Form, FormField, Segment } from "semantic-ui-react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSumbit(term);
  };

  return (
    <Segment>
      <Form onSubmit={onFormSubmit}>
        <FormField>
          <label>Video Search</label>
          <input type="text" onChange={(e) => setTerm(e.target.value)} />
        </FormField>
      </Form>
    </Segment>
  );
};
export default SearchBar;
