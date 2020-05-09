import React from "react";
import {
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader
} from "mdbreact";

const popOver = (props) => {
  return (
    <MDBPopover placement="bottom" popover clickable>
        {props.children}
      <div>
        <MDBPopoverHeader>popover on top</MDBPopoverHeader>
        <MDBPopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </MDBPopoverBody>
      </div>
    </MDBPopover>
  );
};

export default popOver;
