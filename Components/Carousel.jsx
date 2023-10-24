import React from 'react';
import Link from 'next/link';

const CarouselItem = ({ imgSrc, title, instructors }) => {
  return (
    <div className="carousel-five-item" data-aos="fade-down">
      <div className="course-five-item">
        <div className="course-five-grid">
          <div className="course-icon-five">
            <div className="icon-five-border">
              <Link href="job-category.html">
                <img src={imgSrc} alt={title} />
              </Link>
            </div>
          </div>
          <div className="course-info-five">
            <Link href="job-category.html">
              <h3>{title}</h3>
              <p>{instructors} Instructors</p>
            </Link>
          </div>
          <div className="course-info-btn">
            <Link href="job-category.html">
              <button className="btn-five"><i className="fas fa-chevron-right"></i></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
