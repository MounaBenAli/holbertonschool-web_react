import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    CourseList: {
        width: '95%',
        margin: 'auto',
        marginTop: '200px',
        border: '2px solid rgb(238, 238, 238)'
    },
    colspan: {
        textAlign: 'center',
    },
    th: {
        textAlign: 'left',
        borderBottom: '3px solid rgb(238, 238, 238)',
    },
    td: {
        textAlign: 'left',
    }
});




const CourseList = ({ listCourses }) => {
    return (
        <>
            <table id="CourseList" className={css(styles.CourseList)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                        <CourseListRow textFirstCell='No course available yet' isHeader={false}/>
                    ) : (
                        listCourses.map((course) => (
                            <CourseListRow 
                                key={course.id}
                                isHeader={false} 
                                textFirstCell={course.name} 
                                textSecondCell={course.credit}
                            />
                        ))
                    )}
            </tbody>
            </table>
        </>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;
