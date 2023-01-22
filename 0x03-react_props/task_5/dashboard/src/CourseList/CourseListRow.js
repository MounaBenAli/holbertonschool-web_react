import React from 'react';
import PropTypes from 'prop-types';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const colSpan = textSecondCell === null ? 2 : null;
    return (
        <tr>
            {isHeader ? 
                (textSecondCell === null ? 
                    <th colSpan={colSpan}>{textFirstCell}</th> 
                    : 
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                ) : 
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            }
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}

export default CourseListRow;
