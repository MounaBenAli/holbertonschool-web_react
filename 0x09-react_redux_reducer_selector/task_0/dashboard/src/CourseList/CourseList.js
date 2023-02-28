import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
    ':hover': {
      backgroundColor: '#e5e5e5'
    }
  },
  headerRow: {
    backgroundColor: '#deb5b545'
  },
  firstCell: {
    fontWeight: 'bold'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const colSpan = textSecondCell === null ? 2 : null;
  const rowStyle = isHeader ? css(styles.headerRow) : css(styles.row);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const rowElement = document.getElementById(`row-${textFirstCell}`);
    if (rowElement) {
      if (isChecked) {
        rowElement.classList.add(css(styles.rowChecked));
      } else {
        rowElement.classList.remove(css(styles.rowChecked));
      }
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr id={`row-${textFirstCell}`} style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={colSpan} className={css(styles.firstCell)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.firstCell)}>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.firstCell)}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
