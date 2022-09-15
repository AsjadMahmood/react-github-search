import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Option } from 'react-bootstrap-typeahead/types/types';
import Form from 'react-bootstrap/Form';

type PropType = {
  options: Array<string>;
  handleInput: (e: Option[]) => void;
}

export function UserSelect(props: PropType) {

  return (
    <Form.Group>
      <div>
      <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={props.handleInput}
          options={props.options}
          placeholder="Choose a Language"
        />
      </div>
    </Form.Group>
  )
}