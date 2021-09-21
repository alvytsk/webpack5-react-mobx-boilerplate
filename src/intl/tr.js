// @ts-nocheck
import React from "react";
import { FormattedMessage } from "react-intl";

const tr = (id, value = {}) => {
  return <FormattedMessage id={id} values={{ ...value }} />;
};

export default tr;
