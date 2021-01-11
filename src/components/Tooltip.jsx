import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { uid } from "uid";
import ReactTooltip from "react-tooltip";

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  show: PropTypes.bool,
  place: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  effect: PropTypes.oneOf(["float", "solid"]),
};

function Tooltip({
  children,
  title,
  show = true,
  place = "top",
  effect = "solid",
  ...props
}) {
  const tooltipId = uid();

  if (!children) {
    return null;
  }
  return (
    <>
      <StyledWrapper data-tip data-for={tooltipId} {...props}>
        {children}
      </StyledWrapper>
      {title && show && (
        <ReactTooltip id={tooltipId} place={place} effect={effect}>
          {title}
        </ReactTooltip>
      )}
    </>
  );
}

const StyledWrapper = styled.div``;

export default memo(Tooltip);
